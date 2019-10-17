import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, HostListener } from '@angular/core';
import { ModalService, IComponentObject } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', {read: ViewContainerRef, static: false})
  public modal!: ViewContainerRef;

  public isOpen: boolean = false;
  public childComponent!: ComponentFactory<any>;
  public _modalContext!: ComponentRef<any>;

  constructor(
    private readonly  _modalService: ModalService,
    private readonly  _cfr: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this._modalService.modalSequence$
      .subscribe(({component, context}: IComponentObject) => {
        if (!component) {
          this.close();
          return;
        }
        this.isOpen = true;
        this.childComponent = this._cfr.resolveComponentFactory(component);
        this._modalContext = this.modal.createComponent(this.childComponent);
        Object.keys(context).forEach(
          (key: string) => this._modalContext.instance[key] = context[key]
        );
      });
  }

  @HostListener('window:keyup.esc')
  public close(): void {
    this._modalContext && this._modalContext.destroy();
    this.isOpen = false;
  }

}
