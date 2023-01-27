import { Component, ViewChild,AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../services/home.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SearchExpedientesResponse } from '../interfaces/table.interfaces';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';



import {MatTableDataSource} from '@angular/material/table';
import { ModalComponent } from '../modal/modal.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
/*const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];*/
//const ELEMENT_DATA: SearchExpedientesResponse[] = [];

    
/*const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];*/

 

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  
  
 
   
})



export class SideBarComponent  {
  public expedientes: SearchExpedientesResponse[] = [];
  public page: number = 0;
  public search: string = '';
  public size:number=1;

  public id:number=0;
  public url='https://localhost:7019/ExpedientesCosquin/ExpedientesCosquin'



// Hace referencia al elemento <span> que tiene la X que cierra la ventana
public span = document.getElementsByClassName("cerrar")[0];
  

ngAfterViewInit() {
  
  
  var res=this.CargarTabla();
 
  console.log('datasource', this.resultados);
  //mapear los datos de la tabla

  
}

ngOnInit() {
  this.size=5

}
get resultados(){
  
  return this.service.Tabla;
}
 



constructor(private service:HomeService,private modalService: NgbModal,private http:HttpClient) {
  this.service=service;
 // Ventana modal

  
}
  
 
  CargarTabla(){
    
   var resp= this.service.TraerDatos();
   
  }

  EliminarExpediente(id:number){
    var alerta= confirm('Estás seguro que deseas eliminar el registro?');
  if(alerta==true){
    
    this.service.EliminarExpediente(id);
    alert('Registro eliminado');
    this.CargarTabla();
    
  }else
  {
    return;
  }
  }

  GetId(id:number){
    console.log('id',id);
    this.id=id;
   return id;
  }

  regForm = new FormGroup({
    id:new FormControl(this.id),
    nombre: new FormControl(''),
    fecha: new FormControl(''),
    ultimoMovimiento: new FormControl(''),
    n_liqudacion: new FormControl(),
    objeto: new FormControl(''),
    inicioDemanda: new FormControl(''),
    monteo_N_Juicio: new FormControl(),
    juzgado: new FormControl(''),
    notif_DDA: new FormControl(''),
    sentencia_Ejecucion: new FormControl(''),
    liquidacion: new FormControl(''),
    embargo: new FormControl(''),
    autorizacion_Desig: new FormControl(''),
    propuesta: new FormControl(''),
    tramite: new FormControl(),
    domicilio: new FormControl(''),
    cuit_Dni: new FormControl(''),
    matricula: new FormControl(''),
    telefono: new FormControl(),
    accionesCobro: new FormControl(''),

    
  });
  EditarReg(){
    
    var id= this.GetId(this.id);
   
    console.warn(this.regForm.value);
    this.http.put<SearchExpedientesResponse>(`${this.url}/update/${id}`,this.regForm.value).subscribe((resp)=>{
   
      this.service.TraerDatos();
      console.log('editado',resp);
    })
    alert('Registro editado');
  }



setIntervalo(size:number){
switch (size) {

  case 1:
    this.size=size;
    break;
  case 5:
    this.size=size;
    break;
  case 10:
    this.size=size;
    break;
  case 50:
    this.size=size;
    break;
  case 100:
    this.size=size;
    break;
  

  
}
console.log('size',this.size);
return 1000;
}

nextPage() {

  this.page += this.size;


}

prevPage() {
  
  if ( this.page > 0 )
    this.page -= this.size;
}

onSearchPokemon( search: string ) {
  this.page = 0;
  this.search = search;
}

//logica de abrir y cerrar modal




}




