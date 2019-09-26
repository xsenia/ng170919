import { NgModule } from '@angular/core';
import {MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule, 
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SharedModule { }
