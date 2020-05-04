import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../services/data-api.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  filteredPersonList2:[];
  actual=1;
  actual2=0;
  busqueda ="";

  constructor(
    private dataapiservice: DataApiService,
    private modalService: NgbModal
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
  //Filtrar un personaje
  getOnePerson(id:number) {
    this.actual2=id;
    if(id<1){
      id=1;
      this.actual2=1;
    }
    this.dataapiservice.getOnePerson(this.busqueda).subscribe(
      data2 => {
        if (data2["results"].length > 0) {
          this.personaje = data2["results"];
          this.filteredPersonList2 = this.personaje;
        }else{
          alert("No hay");
        }
      },
      error => {
        this.actual2=this.actual2-1;
        console.log("Fin de registros");
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Has llegado al final de los registros'
        })
      }
    );
  }
  //Ventana de busqueda individual
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'xl' })
    .result.then((result) => {
      console.log("Busqueda cerrada");
    }, (reason) => {
      console.log("Busqueda cerrada");
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
