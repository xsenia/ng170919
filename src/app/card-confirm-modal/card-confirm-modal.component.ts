import { Component, OnInit } from '@angular/core';
import { IProduct } from '../mock';

@Component({
  selector: 'app-card-confirm-modal',
  templateUrl: './card-confirm-modal.component.html',
  styleUrls: ['./card-confirm-modal.component.css']
})
export class CardConfirmModalComponent implements OnInit {

  public product!: IProduct;
  public save!: Function;
  public close!: Function;

  constructor() { }

  ngOnInit() {
  }

}
