import { ArrayType } from '@angular/compiler'

export interface Peliculas{
    title?: string,
    episode_id?: number,
    opening_crawl?: string, 
    director?: string,
    producer?: string,
    release_date?: Date,
    species?: ArrayType,
    starships?: ArrayType,
    vehicles?: ArrayType,
    characters?: ArrayType,
    planets?: ArrayType ,
    url?: String,
    created?: string,
    edited?: string
}