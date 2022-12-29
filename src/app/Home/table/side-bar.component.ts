import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../services/home.service';

interface Personas{
  id:number;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})


export class SideBarComponent {

//que cargar movimientos se ejecuta al cargar la pagina
  ngOnInit() {
    this.CargarTabla();
  }

constructor(private service:HomeService) {
  this.service=service;
  
}
  get resultados(){
    return this.service.Tabla;
  }
  CargarTabla(){

   var resp= this.service.TraerDatos();

   /* (async () => {
      const rawResponse = await fetch('https://localhost:7019/ExpedientesCosquin/ExpedientesCosquin', {
          method: 'GET',
          
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
          
      });
      const content = await rawResponse.json();
      let listadohtml = ''

      for (let expediente of content) {
          let botoneliminar = '<a href="#" onclick="Eliminar(' + expediente.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
          let botoneditar = '<a href="#" onclick="Editar(' + expediente.id + ')" class="btn btn-primary btn-circle btn-sm"><i class="fas fa-edit"></i></a>';
          let suariohtml = '<tr><td>' + expediente.id + '</td><td>' + expediente.nombre + '</td><td>' + expediente.fecha + '</td><td> ' + expediente.UltimoMovimiento + '</td><td> ' + expediente.Liquidacion + '</td><td> ' + expediente.Objeto + '</td><td> ' + expediente.InicioDemanda + '</td><td>' + expediente.Monteo_N_Juicio + '</td><td>' + expediente.Juzgado + '</td><td>' + expediente.Notif_DDA + '</td></tr>';
          
          let usuariohtml='<tr><td>'+expediente.id+'</td><td>'+expediente.nombre+'</td><td>'+expediente.fecha+'</td><td>'+expediente.ultimoMovimiento+'</td><td>'+expediente.n_liqudacion+'</td><td>'+expediente.objeto+'</td><td>'+expediente.inicioDemanda+'</td><td>'+expediente.monteo_N_Juicio+'</td><td>'+expediente.juzgado+'</td><td>'+expediente.notif_DDA+'</td><td>'+expediente.sentencia_Ejecucion+'</td><td>'+expediente.liquidacion+'</td><td>'+expediente.embargo+'</td><td>'+expediente.autorizacion_Desig+'</td><td>'+expediente.propuesta+'</td><td>'+expediente.tramite+'</td><td>'+expediente.domicilio+'</td><td>'+expediente.cuit_Dni+'</td><td>'+expediente.matricula+'</td><td>'+expediente.telefono+'</td><td>'+expediente.accionesCobro+'</td><td>'+botoneliminar + ' </td><td>'+ botoneditar+' </td></tr>'
          listadohtml += usuariohtml;
  
      }
      let selector= document.querySelector('#expedientes tbody')!;
     selector.outerHTML = listadohtml;
      
    
      
     
      
      console.log(content);
  })();
  
}
 Eliminar(id:number):void {
  if(!confirm("quiere eliminar la persona?")){
    return;
}
(async () => {
  const rawResponse = await fetch('https://localhost:7019/ExpedientesCosquin/ExpedientesCosquin/delete/'+id, {
      method: 'DELETE',
      
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      
  });
  const content = await rawResponse.json();
  console.log("hola");
})();*/


}
}




