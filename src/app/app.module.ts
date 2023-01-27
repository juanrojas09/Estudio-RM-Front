import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomePageComponent } from './Home/home-page/home-page.component';
import { HomePageModule } from './Home/homepage.module';
import { LoginComponent } from './Login/login/login.component';
import { SideBarComponent } from './Home/table/side-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FiltroPipe } from './Expedientes/pipes/filtro.pipe';
import { FormGroup, FormControl } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    
   
        
    
    
  
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    HttpClientModule,

   

    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
