import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { UsComponent } from './us/us.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    MainComponent,
    UsComponent,
    BlogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
