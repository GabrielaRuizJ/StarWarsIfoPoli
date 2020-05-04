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

  getAllPerson(page:number):Observable<any>{
    const path =`${this.api}/people/?page=${page}`;
    //return this.httpClient.get(`${this.baseURL}/`);
    return this.http.get(path);
  }
  getOnePerson(id2:string){
    const path =`${this.api}/people/?search=${id2}`;
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

}
