import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  customDtOptions: any;
  constructor() { }
  ngOnInit(): void {
    this.customDtOptions = {
      baseApiUrl: "http://localhost:8080",
      get: "products",
      edit: "products/:id",
      add: "products",
      delete: "products/:id",
      deleteByMeasure: "products/measure",
      getByManufacturer: "products/measure",
      getUniqueManufactureCosts: "products/distinct",
      param: "id",
      generateParamOnAdd:true,
      dataTableOptions: {
        columns: [
          { title: "id", data: "id"},
          { title: "Name", data: "name", format: "text"},
          { title: "coord_x", data: "coordinates.0.x"},
          { title: "coord_y", data: "coordinates.0.y" },
          { title: "creationDate", data: "creationDate"},
          { title: "price", data: "price", format: "text" },
          { title: "manufactureCost", data: "manufactureCost"},
          { title: "unitOfMeasure", data: "unitOfMeasure", format: "text"},
          { title: "m_id", data: "manufacturer.0.id" },
          { title: "m_name", data: "manufacturer.0.name" },
          { title: "m_fullName", data: "manufacturer.0.fullName"},
          { title: "m_employeesCount", data: "manufacturer.0.employeesCount"},
          { title: "m_type", data: "manufacturer.0.type"}
        ]
      },
      eventCallbacks: {
        edited: function () {
          console.log("Product Edited");
        },
        added: function () {
          console.log("Product Added");
        },
        deleted: function () {
          console.log('Products Deleted');
        },
        countedByManufacturer: function () {
          console.log('Products counted by manufacturer');
        },
      }
    };
  }
}
