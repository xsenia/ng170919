import { NgModule } from '@angular/core';
import {MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule, 
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
