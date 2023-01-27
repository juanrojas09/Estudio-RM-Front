import { Pipe, PipeTransform } from '@angular/core';
import { SearchExpedientesResponse } from '../../Home/interfaces/table.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(expedientes: SearchExpedientesResponse[],  page: number = 0, search: string = '',size: number=0): SearchExpedientesResponse[] {
    console.log('size2',size);
    if ( search.length === 0 )
      return expedientes.slice(page, page + size);
    
    const filteredPokemons = expedientes.filter( poke => poke.nombre.includes( search ) );
    return filteredPokemons.slice(page, page + size);
  }

}
