import { ArrayType } from '@angular/compiler'

export interface Especies{
    name?: string,
    classification ?: string,
    designation?: string,
    average_height?: String,
    average_lifespan?: string, 
    eye_colors?: string,
    hair_colors?: string,
    skin_colors?: string,
    language?: string,
    homeworld?: string,
    people?: ArrayType,
    films?: ArrayType,
    url?: string ,
    created?: string ,
    edited?: string
}