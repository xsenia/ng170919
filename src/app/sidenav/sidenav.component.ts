import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', {static: true})
  public drawer: MatSidenav;
  

  public toggle(): void {
    this.drawer.toggle();
  }
  

}
