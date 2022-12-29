import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  Busca(){
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    console.log(name);
    this.Search(name);
  }


  Search(name:string){
   /* console.log(name)
    let listadohtml = '';
    (async () => {
      const rawResponse = await fetch('https://localhost:7019/ExpedientesCosquin/ExpedientesCosquin/getByName/'+name, {
          method: 'GET',
          
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
          
      });
      const contentt = await rawResponse.json();
      
      console.log(contentt);
        

   for(let content of contentt){
      if(contentt.length>=1){
        let botoneliminar = '<a href="#" onclick="Eliminar(' + content.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let botoneditar = '<a href="#" onclick="Editar(' + content.id + ')" class="btn btn-primary btn-circle btn-sm"><i class="fas fa-edit"></i></a>';
        let suariohtml = '<tr><td>' + content.id + '</td><td>' + content.nombre + '</td><td>' + content.fecha + '</td><td> ' + content.UltimoMovimiento + '</td><td> ' + content.Liquidacion + '</td><td> ' + content.Objeto + '</td><td> ' + content.InicioDemanda + '</td><td>' + content.Monteo_N_Juicio + '</td><td>' + content.Juzgado + '</td><td>' + content.Notif_DDA + '</td></tr>';
        
        let usuariohtml='<tr style="color:green"><td>'+content.id+'</td><td>'+content.nombre+'</td><td>'+content.fecha+'</td><td>'+content.ultimoMovimiento+'</td><td>'+content.n_liqudacion+'</td><td>'+content.objeto+'</td><td>'+content.inicioDemanda+'</td><td>'+content.monteo_N_Juicio+'</td><td>'+content.juzgado+'</td><td>'+content.notif_DDA+'</td><td>'+content.sentencia_Ejecucion+'</td><td>'+content.liquidacion+'</td><td>'+content.embargo+'</td><td>'+content.autorizacion_Desig+'</td><td>'+content.propuesta+'</td><td>'+content.tramite+'</td><td>'+content.domicilio+'</td><td>'+content.cuit_Dni+'</td><td>'+content.matricula+'</td><td>'+content.telefono+'</td><td>'+content.accionesCobro+'</td><td>'+botoneliminar + ' </td><td>'+ botoneditar+' </td></tr>'
        listadohtml = usuariohtml;
        content= document.querySelector('#expedientes tbody')!;
       content.outerHTML += listadohtml;
        }else{
          alert("No se encontro el expediente");
        }
      }
  
        
    
  
    })();*/
  }

 
}
