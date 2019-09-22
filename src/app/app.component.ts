import { Component } from '@angular/core';

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

  private _money = 3000;

  public getMoney(): number {
    return this._money * 1.2;
  }

  public imgSrc: string = 'https://i.mycdn.me/i?r=AzGBqNaF5OQp2lMpnhRx4DEFuNa8ffA-0s7dVNwD1ApIldjUuV0GcIKOUKJHhJh04to';

  public content: string = '<span>Какой-то текст</span>';

  public width: number = 170;

  public onImgClick(ev: MouseEvent, src: string): void {
    console.log(ev, src);
    console.log('src: ', src);
  }

   
}

