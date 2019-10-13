import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExchangeRate]'
})
export class ExchangeRateDirective implements OnInit {

  @Input('appExchangeRateFrom')
  public rates: {value: number, currency: string} [];

  @Input('appExchangeRateDelay')
  public delayMs: number = 100;

  @Input('appExchangeRateAutoplay')
  public set playAuto(mode: 'on' | 'off') {
    if (!mode) {
      return;
    }
    this.autoplay = mode;
  }

  public autoplay: 'on' | 'off' = 'on';
  public context: any;
  public index: number = 0;
  private intervalID: any;

  public constructor(
    private readonly tpl: TemplateRef<any>,
    private readonly vcr: ViewContainerRef
  ) {
  }

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);
  }

  public next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  public prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private resetInterval(): void {
    if (this.autoplay !== 'on') {
      return;
    }
    this.clearInterval()
    this.initInterval();
  }
  
  private initInterval(): void {
    this.intervalID = setInterval( () => {
      this.next();
    }, this.delayMs)
  }

  private clearInterval(): ExchangeRateDirective {
    clearInterval(this.intervalID);
  }

}
 