import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page/home-page.component';
import { SideBarComponent } from './table/side-bar.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
    HomePageComponent,
    SideBarComponent
    ],
    providers: [],
    bootstrap: [HomePageModule,SideBarComponent],
    exports: [
        HomePageComponent,
        SideBarComponent
    ],
    imports: [
        CommonModule
   
        
    ]
})
export class HomePageModule { 
    
}