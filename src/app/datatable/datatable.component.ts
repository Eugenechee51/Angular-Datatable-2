import { DataTableService } from './dataTable.service';
import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import {DecimalPipe, formatDate} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import parser from 'xml2js';

function parseXml(xml_data: any) {
    var result;
    parser.Parser().parseString(xml_data, (e, r) => {result = r});
    return result;
}

@Component({
  selector: 'data-table',
  styleUrls: ['./datatable.component.scss'],
  templateUrl: './datatable.component.html',
  providers: [DataTableService, DecimalPipe]
})

export class DataTableComponent implements OnDestroy, OnInit, AfterViewInit {

  @Input() customDtOptions: any;
  @ViewChild('addEditModal') addEditModalRef: ElementRef;
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  primaryColumns: any;
  addColumns: any;
  currentRecord: any;
  data: any;
  currentOperation: any;
  templateDataObject: any;
  showLoader = false;
  constructor(private dataTableService: DataTableService, private modalService: NgbModal
    , private decimalPipe: DecimalPipe, private toastr: ToastrService) { }

  ngOnInit(): void {
    //welcome
    const scope = this;
    this.showLoader = true;
    const columns = [...this.customDtOptions.dataTableOptions.columns];
    this.addColumns = Object.assign({}, this.customDtOptions.dataTableOptions.columns);
    this.addColumns = [
      { title: "Name", data: "name", format: "text"},
      { title: "coord_x", data: "coordinates.0.x"},
      { title: "coord_y", data: "coordinates.0.y" },
      { title: "price", data: "price", format: "text" },
      { title: "manufactureCost", data: "manufactureCost"},
      { title: "unitOfMeasure", data: "unitOfMeasure", format: "text"},
      { title: "m_name", data: "manufacturer.0.name" },
      { title: "m_fullName", data: "manufacturer.0.fullName"},
      { title: "m_employeesCount", data: "manufacturer.0.employeesCount"},
      { title: "m_type", data: "manufacturer.0.type"}];
    //this.addColumns = [...this.addColumns];
    this.primaryColumns = columns;
    console.log(this.addColumns);
    console.log(this.primaryColumns);
    const columnDefs = this.customDtOptions.dataTableOptions.columns.map((col, index) =>
      ({
        targets: index,
        className: "dt-center",
        render: (cellData, type, row) =>
          col.format == "text" ? cellData :
            col.format == "number" && !isNaN(cellData) ? this.decimalPipe.transform(cellData, '2.') :
              col.format == "amount" && !isNaN(cellData) ? "$" + this.decimalPipe.transform(cellData / 1000, '2.') + "K" : cellData
      }));
    columnDefs.push({
      targets: columnDefs.length,
      className: "dt-center",
      render: (data, type, row) => `<div class="d-flex justify-content-around">
                  <button type="button" id="editRecordBtn" class="btn btn-warning">Edit</button>
                  <button type="button" id="deleteRecordBtn" class="btn btn-danger">Delete</button>
             </div>`
      ,
      fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
        $(nTd).find("#editRecordBtn").on("click", () => this.openAddEditModal(iRow));
        $(nTd).find("#deleteRecordBtn").on("click", () => this.removeRecord(iRow));
      }
    });
    this.customDtOptions.dataTableOptions.columns.push({ title: 'Actions', data: null });
    this.dtOptions = {
      dom: 'lfr<"toolbar">tip',
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      responsive: true,
      autoWidth: true,
      initComplete: () => {
        console.log("InitComplete");
        $('div.toolbar').html(`<button type="button" id="addRecordBtn" class="btn btn-primary float-right px-2 py-1  mr-3" >Add New Product</button>`);
        $('div.toolbar').find('#addRecordBtn').on('click', () => scope.openAddEditModal(-1));
      },
      ...this.customDtOptions.dataTableOptions,
      columnDefs
    };
    this.dataTableService.baseApiUrl = this.customDtOptions.baseApiUrl;
    var measure = document.getElementById('measureField') as HTMLInputElement | null;
    console.log(measure.value);
    $('div.container').find('#delByMeasureBtn').on('click', () => scope.removeByMeasure(measure.value));

    var manufacturerId = document.getElementById('manufacturerIdField') as HTMLInputElement | null;
    $('div.container').find('#countByManufacturerIdBtn').on('click', () => scope.getCountByManufacturer(manufacturerId.value));
    $('div.container').find('#getUniqueManufactureCostBtn').on('click', () => scope.getUniqueManufactureCost());
    this.getData(false);
  }
  ngAfterViewInit(): void {
    this.dtTrigger.subscribe(() => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function() {
          const that = this;
          $('input', this.footer()).on('keyup change', function() {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
      });
    });
  }

  getData(flag) {  // flag for getData() call without rerender in NgOnInit()
    this.dataTableService.getData(this.customDtOptions.get).subscribe((res: any) => {
      if (res === null) {
        console.log('null');
        //this.rerender();
        if (flag)
          this.rerender();
        else {
          this.dtTrigger.next();
          this.showLoader = false;
        }
        return;
      }
      this.data = res;
      //console.log(this.data);
      this.data = parseXml(this.data);
      this.data = this.data['ArrayList']['item'];
      //console.log(this.data);
      this.dtOptions.data = this.data;
      this.templateDataObject ? "" : this.templateDataObject = Object.fromEntries(Object.keys(this.data[0]).map(key => [key, ""]));
      //this.templateDataObject = 0;
      //console.log("templateDataObject: " + this.templateDataObject);
      if (flag)
        this.rerender();
      else {
        this.dtTrigger.next();
        this.showLoader = false;
      }
    }, (err) => {
      console.log("Error Getting Records", err.message);
      this.toastr.error(err.message, 'Error Getting Records');
    });
  }

  openAddEditModal(iRow) {
    this.currentOperation = (iRow == -1) ? "Add" : "Edit";
    //if (iRow === -1)
      //iRow = 0;
    this.currentRecord = (iRow == -1) ? this.templateDataObject : this.data[iRow];
      this.modalService.open(this.addEditModalRef).result
      .then((result) => console.log('Modal closed'))
      .catch(err => "");
    //delete this.currentRecord.creationDate;
    console.log("Current record: " + 1);
  }
  onAddEditFormSubmit(formValue) {
    this.showLoader = true;
    this.modalService.dismissAll();
    const prop = this.customDtOptions.param;
    const paramValue = this.currentRecord[prop];
    this.customDtOptions.generateParamOnAdd && this.currentOperation == "Add" ? this.currentRecord[prop] = new Date().getTime().toString() : ""
    console.log(formValue);
    const json = {
      //id: formValue.id,
      name: formValue.name,
      coordinates:{
        x: formValue['coordinates.0.x'],
        y: formValue['coordinates.0.y']
      },
      price: formValue.price,
      manufactureCost: formValue.manufactureCost,
      unitOfMeasure: formValue.unitOfMeasure,
      manufacturer:{
        //id: formValue['manufacturer.0.id'],
        name: formValue['manufacturer.0.name'],
        fullName: formValue['manufacturer.0.fullName'],
        employeesCount: formValue['manufacturer.0.employeesCount'],
        type: formValue['manufacturer.0.type']
      }};
    console.log(json);
    const dataToSend = { ...this.currentRecord, ...json };
    console.log(dataToSend);
    this.currentOperation == "Add" ?
      this.dataTableService.createData(this.customDtOptions.add, dataToSend).subscribe((res) => {
        console.log(res);
        this.currentRecord = null;
        this.currentOperation = "";
        this.toastr.success('Record Added Successfully', 'Success');
        this.customDtOptions.eventCallbacks.added();
        this.getData(true);
      }, (err) => {
        console.log("Error Adding Record", err.message);
        this.toastr.error(err.message, 'Error Adding Record');
        this.currentRecord = null;
        this.currentOperation = "";
        this.showLoader=false;
      })
      : // EDIT MODE
      this.dataTableService.editData(this.customDtOptions.edit, paramValue, dataToSend).subscribe((res) => {
        console.log(res);
        this.currentRecord = null;
        this.currentOperation = "";
        this.toastr.success('Record Edited Successfully', 'Success');
        this.customDtOptions.eventCallbacks.edited();
        this.getData(true);
      }, (err) => {
        console.log("Error Editing Record", err.message);
        this.toastr.error(err.message, 'Error Editing Record');
        this.currentRecord = null;
        this.currentOperation = "";
        this.showLoader=false;
      });
  }

  removeRecord(iRow) {
    this.showLoader = true;
    this.currentRecord = this.data[iRow];
    const paramValue = this.currentRecord[this.customDtOptions.param];
    this.dataTableService.deleteData(this.customDtOptions.delete, paramValue).subscribe((res) => {
      console.log(res);
      this.currentRecord = null;
      this.currentOperation = "";
      this.toastr.success('Record Deleted Successfully', 'Success');
      this.customDtOptions.eventCallbacks.deleted();
      this.getData(true);
      //this.rerender();

    }, (err) => {
      console.log("Error Deleting Record", err.message);
      this.toastr.error(err.message, 'Error Deleting Record');
      this.currentRecord = null;
      this.currentOperation = "";
      this.showLoader = false;
    });
  }

  removeByMeasure(measureType) {
      this.showLoader=true;
      this.dataTableService.deleteDataByMeasure(this.customDtOptions.deleteByMeasure, measureType).subscribe((res) => {
        console.log(res);
        this.currentRecord = null;
        this.currentOperation = "";
        this.toastr.success('Records Deleted Successfully', 'Success');
        this.customDtOptions.eventCallbacks.deleted();
        this.getData(true);
      }, (err) => {
        console.log("Error Deleting Record", err.message);
        this.toastr.error(err.message, 'Error Deleting Record');
        this.currentRecord = null;
        this.currentOperation = "";
        this.showLoader=false;
      });
  }

  getCountByManufacturer(manufacturerId) {
    this.showLoader=true;
    this.dataTableService.getCountByManufacturer(this.customDtOptions.getByManufacturer, manufacturerId).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.data = parseXml(this.data);
      this.data = this.data['Count']['count'];
      console.log(this.data);
      this.currentRecord = null;
      this.currentOperation = "";
      this.toastr.success('Products counted: '+ this.data, 'Success');
      document.getElementById("p1").textContent = 'Products counted: '+ this.data;
      this.customDtOptions.eventCallbacks.countedByManufacturer();
      this.getData(true);
    }, (err) => {
      console.log("Error Cuunting Records", err.message);
      this.toastr.error(err.message, 'Error Cuunting Records');
      document.getElementById("p1").textContent = 'Products not counted';
      this.currentRecord = null;
      this.currentOperation = "";
      this.showLoader=false;
    });
  }

  getUniqueManufactureCost(){
    this.showLoader=true;
    this.dataTableService.getUniqueManufactureCosts(this.customDtOptions.getUniqueManufactureCosts).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.data = parseXml(this.data);
      //this.data = this.data['Count']['count'];
      this.currentRecord = null;
      this.currentOperation = "";
      this.toastr.success('Records Received Successfully', 'Success');
      //document.getElementById("p1").textContent = 'Products counted: '+ this.data;
      this.customDtOptions.eventCallbacks.countedByManufacturer();
      this.data = this.data['ArrayList']['item'];
      console.log(this.data);
      this.dtOptions.data = this.data;
      this.rerender();
    }, (err) => {
      console.log("Error Deleting Record", err.message);
      this.toastr.error(err.message, 'Error Deleting Record');
      this.currentRecord = null;
      this.currentOperation = "";
      this.showLoader=false;
    });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
      this.showLoader = false;
    });/*
    this.dtTrigger.next();
    this.showLoader = false;*/
    console.log('Rerendered');
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
