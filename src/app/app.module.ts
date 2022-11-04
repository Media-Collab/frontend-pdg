import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguridadModule } from './pages/seguridad/seguridad.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeModule } from './pages/home/home.module';
import { TestModule } from './pages/test/test.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { ProfesorModule } from './pages/profesor/profesor.module';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { SafePipe } from 'src/app/pipes/safe.pipe';
// import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadModule,
    FormsModule,
    HomeModule,
    TestModule,
    ComponentsModule,
    BrowserAnimationsModule,
    GridModule,
    MatIconModule,
    ProfesorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
