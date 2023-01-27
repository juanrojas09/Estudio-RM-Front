import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { SearchExpedientesResponse,FetchAllExpedientesResponse,SmallExp } from '../interfaces/table.interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
   resultados:SearchExpedientesResponse[]=[];
   res:FetchAllExpedientesResponse[]=[];
   public search: string = '';
   public page: number = 0;
  
  private url='https://localhost:7019/ExpedientesCosquin/ExpedientesCosquin'

  get Tabla(){
    var s=this.resultados
    //console.log('tabla',s)
      return s;
  }
  constructor(private http:HttpClient) { 

  }
  TraerDatos(){
    this.http.get<SearchExpedientesResponse[]>(`${this.url}`).subscribe((resp)=>{
      let listadohtml = ''
      console.log('array',resp);
     
      this.resultados.push(...resp);
        this.resultados=resp;       
  });

  
}
EliminarExpediente(id:number){
  this.http.delete(`${this.url}/delete/${id}`).subscribe((resp)=>{
    this.TraerDatos();
    console.log('eliminado',resp);
  })
}

EditarExpediente(id:number){
console.log('id',id);
  const body={
    
    id:id,               
    nombre: "juan",              
    fecha:"s" ,              
    ultimoMovimiento: "s",    
    n_liqudacion: 1     ,   
    objeto:      "s"       ,  
    inicioDemanda: "s"     , 
    monteo_N_Juicio: 1    ,
    juzgado:          "s"   ,
    notif_DDA:          "s" ,
    sentencia_Ejecucion: "s",
    liquidacion:        "s" ,
    embargo:            "s" ,
    autorizacion_Desig:  "s",
    propuesta:           "s",
    tramite:             0,
    domicilio:           "2",
    cuit_Dni:            "2",
    matricula:           "s",
    telefono:            2,
    accionesCobro:      "s"
 }
  this.http.put<SearchExpedientesResponse>(`${this.url}/update/${id}`,body).subscribe((resp)=>{
   
    this.TraerDatos();
    console.log('editado',resp);
  })
}
onSearchPokemon( search: string ) {
  this.page = 0;
  this.search = search;
  console.log('search',this.search);

}

}
