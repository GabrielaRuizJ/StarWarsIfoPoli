import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from '../Models/personajes-interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private api ='https://swapi.py4e.com/api';
  constructor(
    private http: HttpClient
  ) { }

//Personajes

  getAllPerson(page:number):Observable<any>{
    const path =`${this.api}/people/?page=${page}`;
    //return this.httpClient.get(`${this.baseURL}/`);
    return this.http.get(path);
  }
  getOnePerson(id2:string){
    const path =`${this.api}/people/?search=${id2}`;
    console.log(path);
    return this.http.get(path);
  }
  

  //Consultas a peliculas
  getAllFilm(page:number):Observable<any>{
    const path =`${this.api}/films/?page=${page}`;
    return this.http.get(path);
  }
  getOneFilm(id2:string){
    const path =`${this.api}/films/?search=${id2}`;
    return this.http.get(path);
  }


  //Naves espaciales
  getAllStarships(page:number):Observable<any>{
    const path =`${this.api}/starships/?page=${page}`;
    return this.http.get(path);
  }
  getOneStarships(id2:string){
    const path =`${this.api}/starships/?search=${id2}`;
    return this.http.get(path);
  }
  

  //Vehiculos
  getAllVehicles(page:number):Observable<any>{
    const path =`${this.api}/vehicles/?page=${page}`;
    return this.http.get(path);
  }
  getOneVehicles(id2:string){
    const path =`${this.api}/vehicles/?search=${id2}`;
    return this.http.get(path);
  }


  //Especies
  getAllSpecies(page:number):Observable<any>{
    const path =`${this.api}/species/?page=${page}`;
    return this.http.get(path);
  }
  getOneSpecies(id2:string){
    const path =`${this.api}/species/?search=${id2}`;
    return this.http.get(path);
  }

   
  //Planetas
  getAllPlanets(page:number):Observable<any>{
    const path =`${this.api}/planets/?page=${page}`;
    return this.http.get(path);
  }
  getOnePlanets(id2:string){
    const path =`${this.api}/planets/?search=${id2}`;
    return this.http.get(path);
  }
  
  
}
