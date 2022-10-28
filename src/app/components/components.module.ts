import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { RouterModule } from '@angular/router';
import {
  FooterModule,
  HeaderModule,
  DropdownModule,
  GridModule,
  NavModule,
} from '@coreui/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CardBlogComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    DropdownModule,
    NavModule,
    GridModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, CardBlogComponent],
})
export class ComponentsModule {}
