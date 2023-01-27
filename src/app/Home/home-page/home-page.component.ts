import { Component } from '@angular/core';
import { SideBarComponent } from '../table/side-bar.component';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  public search: string = '';
  public page: number = 0;
 
 
  onSearchPokemon(search: string) {
    
  this.service.onSearchPokemon(search);
  }

  /**
   *
   */
  constructor(private service:HomeService) {
    
  }
  
    
  }




 

