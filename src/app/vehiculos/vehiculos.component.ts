import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../services/data-api.service';
import Swal  from "sweetalert2";

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  VehiculosAll:any;
  Vehiculo:any;
  filteredVehiculoList: [];
  actual=1;
  busqueda ="";

  constructor(
    private dataapiservice: DataApiService
  ) { }

  ngOnInit(): void {
    this.getVehicles(1);
  }

  getVehicles(id:number) {
    this.actual=id;
    if(id<1){
      id=1;
      this.actual=1;
    }
    this.dataapiservice.getAllVehicles(id).subscribe(
      data => {
        if (data["results"].length > 0) {
          
          this.VehiculosAll = data["results"];
          this.filteredVehiculoList = this.VehiculosAll;
        }else{
          alert("No hay");
        }
      },
      error => {
        this.actual=this.actual-1;
        console.log("Fin de registros");
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Has llegado al final de los registros'
        })
      }
    );
  }
}
