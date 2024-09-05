import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductlistComponent } from './components/functions/productlist/productlist.component';
import { DilutioncalculatorComponent } from './components/functions/dilutioncalculator/dilutioncalculator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductlistComponent,
    DilutioncalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
