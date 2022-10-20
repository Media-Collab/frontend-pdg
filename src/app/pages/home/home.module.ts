import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { UsComponent } from './us/us.component';
import { BlogComponent } from './blog/blog.component';
// import components
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [MainComponent, UsComponent, BlogComponent],
  imports: [CommonModule, ComponentsModule],
})
export class HomeModule {}
