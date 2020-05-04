import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../services/data-api.service';
import {Naves} from '../Models/naves-interfaces';
import Swal  from "sweetalert2";

@Component({
  selector: 'app-naves-espaciales',
  templateUrl: './naves-espaciales.component.html',
  styleUrls: ['./naves-espaciales.component.css']
})
export class NavesEspacialesComponent implements OnInit {

  navesAll:any;
  nave:any;
  filteredNavesList: [];
  actual=1;
  busqueda ="";

  constructor(
    private dataapiservice: DataApiService
  ) { }

  ngOnInit(): void {
    this.getStarShip(1);
  }

  getStarShip(id:number) {
    this.actual=id;
    if(id<1){
      id=1;
      this.actual=1;
    }
    this.dataapiservice.getAllStarships(id).subscribe(
      data => {
        if (data["results"].length > 0) {
          this.navesAll = data["results"];
          this.filteredNavesList = this.navesAll;
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
