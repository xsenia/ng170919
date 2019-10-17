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
import { ModalModule } from './modal/modal.module';
import { CardConfirmModalComponent } from './card-confirm-modal/card-confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductFilterPipe,
    ExchangeRateComponent,
    ExchangeRateDirective,
    HiddenDirective,
    CardConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [
    {provide: ProductsService, useClass: ProductsService} //короткая запись ProductsService
  ],
  entryComponents: [CardConfirmModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
