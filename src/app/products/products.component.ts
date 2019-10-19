import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { IProduct } from '../mock';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public searchTerm: string = '';
  public onlyFavorites: boolean = false;
  public products$!: Observable<IProduct[]>;
  public isShow: boolean = true;

  public constructor(
    private ProductsService: ProductsService
  ) {}   

  public ngOnInit(): void {
    this.products$ = this.ProductsService.getProducts();    
  }

  // public search(event: KeyboardEvent): void {
  //   this.searchTerm = $event.target.value;
  // }
  //или по-другому:

  public search({target}: Event): void {
    const value: string = (target as HTMLInputElement).value; 
    this.searchTerm = value;
    console.log(this.searchTerm);
  }

  public toggleOnlyFavorites(event: MatCheckboxChange): void {
      console.log(event.checked);
      this.onlyFavorites = event.checked;
  }

}
