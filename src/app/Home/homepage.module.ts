import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page/home-page.component';
import { SideBarComponent } from './table/side-bar.component';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';


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
        CommonModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatTableModule,
        NgbModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        
       
        
   
        
    ]
})
export class HomePageModule { 
    
}