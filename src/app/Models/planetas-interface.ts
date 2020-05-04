import { ArrayType } from '@angular/compiler'

export interface Planetas{
    name?: string,
    diameter?: string,
    rotation_period?: string,
    orbital_period?: string,
    gravity?: string,
    population?: string,
    climate?: string ,
    terrain?: string,
    surface_water?: String,
    residents?: ArrayType,
    films?: ArrayType,
    url?: string ,
    created?: string ,
    edited?: string
}
