import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public title: string;

  @Input()
  public drawer: MatSidenav;

  public rates: {value: number, currency: string}[] = [
    {value: 1, currency: 'USD'},
    {value: 10, currency: 'EUR'},
    {value: 14, currency: 'RUB'}
  ];

  public toggleDrawer(): void {
    this.drawer.toggle();
  }

  
}
