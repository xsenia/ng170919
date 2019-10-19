import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../mock';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], searchTerm: string, onlyFavorites: boolean): IProduct[] {
    let result: IProduct[] = products;
    if(onlyFavorites) {
      result = result.filter((product: IProduct) => product.isFavorite === onlyFavorites)
    }
    if(!searchTerm) {
      return result;
    }
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
