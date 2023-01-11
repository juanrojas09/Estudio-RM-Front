import { Component, ViewChild,AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../services/home.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SearchExpedientesResponse } from '../interfaces/table.interfaces';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';






import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  
  
 
   
})


export class SideBarComponent  {



  public dataSource=new MatTableDataSource<SearchExpedientesResponse>(this.resultados);
  displayedColumns: string[] = [
    'id',
    'nombre',
   'fecha',
   'ultimoMovimiento',
    'n_liqudacion',
    'objeto',
    'inicioDemanda',
    'Monteo_N_Juicio',
    'juzgado',
    'notif_DDA',
    'sentencia_Ejecucion',
    'liquidacion',
    'embargo',
    'autorizacion_Desig',
    'propuesta',
    'tramite',
    'domicilio',
    'cuit_Dni',
    'matricula',
    'telefono' ,
    'accionesCobro'




  ];
 
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;  
  
  
 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   
  }
//funcion que se ejecute al cargar pagina oninit

ngOnInit() {
  this.CargarTabla();
 

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

constructor(private service:HomeService) {
  this.service=service;
  
}
  
  get resultados(){
    return this.service.Tabla;
  }
  CargarTabla(){

   var resp= this.service.TraerDatos();
   

}


}




