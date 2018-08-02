import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private seleccionBoton: boolean;

  constructor() {
    this.seleccionBoton = false;
  }

  ngOnInit() {
  }

}
