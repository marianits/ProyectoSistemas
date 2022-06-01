export class Comercio{
    id:number;
    nombre:String;
    telf:String;
    direccion:String;
    id_adm_comercio:number;
}

export interface Self {
    href: string;
}

export interface Comercios {
    href: string;
}

export interface Links {
    self: Self;
    comercios: Comercios;
}

export interface ComercioResp {
    id: number;
    nombre: string;
    telf: string;
    direccion: string;
    id_adm_comercio: number;
    _links: Links;
}

export interface Embedded {
    comercioList: ComercioResp[];
}

export interface Self2 {
    href: string;
}

export interface Links2 {
    self: Self2;
}

export interface ComercioResponse {
    _embedded: Embedded;
    _links: Links2;
}



