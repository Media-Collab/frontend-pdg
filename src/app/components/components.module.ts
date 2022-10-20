import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CardBlogComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, CardBlogComponent],
})
export class ComponentsModule {}
