import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';
import {products, IProduct} from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: {text: string, subtitle: {text: string}} = {
    text: 'Курс Angular - ng170919',
    subtitle: {text: 'Подзаголовок'}
  };

  public searchTerm: string = '';

  public products: IProduct[] = products;

  public drawer: MatSidenav;

  public isShow: boolean = true;

  public ngOnInit(): void {
    setTimeout (()=>{
      this.isShow = false;
    }, 3000)
  }

  public setSideNav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }
   
  // public search(event: KeyboardEvent): void {
  //   this.searchTerm = $event.target.value;
  // }
  //или по-другому:

  public search({target}: KeyboardEvent): void {
    const value: string = (target as HTMLInputElement).value; 
    this.searchTerm = value;
    console.log(this.searchTerm);
  }

}

