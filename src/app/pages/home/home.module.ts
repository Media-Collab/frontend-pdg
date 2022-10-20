import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { UsComponent } from './us/us.component';
import { BlogComponent } from './blog/blog.component';
// import components
import { ComponentsModule } from 'src/app/components/components.module';
import { CarouselModule } from '@coreui/angular';

@NgModule({
  declarations: [MainComponent, UsComponent, BlogComponent],
  imports: [CommonModule, RouterModule, ComponentsModule, CarouselModule],
})
export class HomeModule {}
