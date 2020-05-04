import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../services/data-api.service';
import Swal  from "sweetalert2";

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  especiesAll:any;
  especie:any;
  filteredEspecieList: [];
  actual=1;
  busqueda ="";

  constructor(
    private dataapiservice: DataApiService
  ){}

  ngOnInit(): void {
    this.getEspecies(1);   
  }
  getEspecies(id:number) {
    this.actual=id;
    if(id<1){
      id=1;
      this.actual=1;
    }
    this.dataapiservice.getAllSpecies(id).subscribe(
      data => {
        if (data["results"].length > 0) {
          
          this.especiesAll = data["results"];
          this.filteredEspecieList = this.especiesAll;
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