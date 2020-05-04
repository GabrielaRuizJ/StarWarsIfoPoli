import { ArrayType } from '@angular/compiler'

export interface Personajes{
    name?: string,
    birth_year?: string,
    eye_color?: string, 
    gender?: string,
    hair_color?: string,
    height?: string,
    mass?: string,
    skin_color?: string,
    homeworld?: string,
    films?: ArrayType,
    species?: ArrayType ,
    starships?: ArrayType,
    vehicles?: ArrayType,
    url?: string ,
    created?: string ,
    edited?: string
}