import { Component, Input } from '@angular/core';
import { IProduct } from '../../mock';
import { ModalService } from '../../modal/modal.service';
import { CardConfirmModalComponent } from '../../card-confirm-modal/card-confirm-modal.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input()
  public product: IProduct;

  public constructor(
    private readonly modalService: ModalService
  ) {

  }

  public toggleFavorite(): void {
    this.product.isFavorite = !this.product.isFavorite;
  }

  public addToCart(product: IProduct): void {
    this.modalService.open({
      component: CardConfirmModalComponent,
      context: {
        product: {...product},
        save: () => {
          console.log('save');
          this.modalService.close();
        },
        close: () => {
          console.log('close');
          this.modalService.close();
        }
      }
    });
  }
  

}
