import { Pipe, PipeTransform } from '@angular/core';
import { SearchExpedientesResponse } from '../../Home/interfaces/table.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(expedientes: SearchExpedientesResponse[],  page: number = 0, search: string = '',size: number=0,nliq:string=''): SearchExpedientesResponse[] {
    console.log('size2',size);
     if(nliq.length===0 && search.length===0 ){
      return expedientes.slice(page, page + size);
    }else if(nliq.length>0){
    
    const filteredNliq = expedientes.filter( poke => poke.n_liqudacion.toString().includes( nliq ) );
    return filteredNliq.slice(page, page + size);  
  }else{
    if ( search.length === 0 ){
      return expedientes.slice(page, page + size);
    }else{
      const filteredPokemons = expedientes.filter( poke => poke.nombre.includes( search ) );
      return filteredPokemons.slice(page, page + size);
    }
  }

}
}
