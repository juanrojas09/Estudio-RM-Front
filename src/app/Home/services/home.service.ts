import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchExpedientesResponse } from '../interfaces/table.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public resultados:SearchExpedientesResponse[]=[];
  
  public url='https://localhost:7019/ExpedientesCosquin/ExpedientesCosquin'

  get Tabla(){
      return [...this.resultados];
  }
  constructor(private http:HttpClient) { 

  }
  TraerDatos(){
    this.http.get<SearchExpedientesResponse[]>(`${this.url}`)
    .subscribe((resp)=>{
      let listadohtml = ''
      console.log(resp);
     
        this.resultados=resp;
        

   
     
    
      
     
      
      
  });

}
}
