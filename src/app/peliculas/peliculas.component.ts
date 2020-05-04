import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../services/data-api.service';
import {Personajes} from '../Models/personajes-interface';
import Swal  from "sweetalert2";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  FilmsAll:any;
  film:any;
  filteredFilmList: [];
  actual=1;
  busqueda ="";
  
  constructor(
    private dataapiservice: DataApiService
  ) { }

  ngOnInit(): void {
    this.getFilms(1);
  }
  getFilms(id:number) {
    this.actual=id;
    if(id<1){
      id=1;
      this.actual=1;
    }
    this.dataapiservice.getAllFilm(id).subscribe(
      data => {
        if (data["results"].length > 0) {
          
          this.FilmsAll = data["results"];
          this.filteredFilmList = this.FilmsAll;
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
