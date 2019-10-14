import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ExchangeRateComponent } from './header/exchange-rate/exchange-rate.component';
import { ExchangeRateDirective } from './header/exchange-rate/exchange-rate.directive';
import { HiddenDirective } from './header/exchange-rate/hidden.directive';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductFilterPipe,
    ExchangeRateComponent,
    ExchangeRateDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: ProductsService, useClass: ProductsService} //короткая запись ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
