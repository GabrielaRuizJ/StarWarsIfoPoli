import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../services/data-api.service';
import {Personajes} from '../Models/personajes-interface';
import Swal  from "sweetalert2";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  //personajesAll:Personajes[]=[];
  personajesAll:any;
  personaje:any;
  filteredPersonList: [];
  actual=1;
  busqueda ="";

  constructor(
    private dataapiservice: DataApiService
  ){}

  ngOnInit(): void {
    this.getPerson(1);   
  }
  getPerson(id:number) {
    this.actual=id;
    if(id<1){
      id=1;
      this.actual=1;
    }
    this.dataapiservice.getAllPerson(id).subscribe(
      data => {
        if (data["results"].length > 0) {
          
          this.personajesAll = data["results"];
          this.filteredPersonList = this.personajesAll;
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
