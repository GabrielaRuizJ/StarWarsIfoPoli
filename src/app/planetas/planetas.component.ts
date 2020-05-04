import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../services/data-api.service';
import Swal  from "sweetalert2";

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  PlanetAll:any;
  Planet:any;
  filteredPlanetList: [];
  actual=1;
  busqueda ="";
  
  constructor(
    private dataapiservice: DataApiService
  ) { }

  ngOnInit(): void {
    this.getPlanets(1);
  }
  getPlanets(id:number) {
    this.actual=id;
    if(id<1){
      id=1;
      this.actual=1;
    }
    this.dataapiservice.getAllPlanets(id).subscribe(
      data => {
        if (data["results"].length > 0) {
          
          this.PlanetAll = data["results"];
          this.filteredPlanetList = this.PlanetAll;
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
