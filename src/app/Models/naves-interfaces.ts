import { ArrayType } from '@angular/compiler'

export interface Naves{
    name?: string,
    model?: string,
    starship_class?: string, 
    manufacturer?: string,
    cost_in_credits?: string,
    length?: string,
    crew?: string,
    passengers?: string,
    max_atmosphering_speed?: string,
    hyperdrive_rating?: string,
    MGLT?: string,
    consumables?: String,
    films?: ArrayType,
    pilots?: ArrayType ,
    url?: string ,
    created?: string ,
    edited?: string
}