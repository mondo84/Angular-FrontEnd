import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nofound',
  templateUrl: './nofound.component.html',
  styleUrls: ['./nofound.component.css']
})
export class NofoundComponent implements OnInit {

  mensaje: string = "";

  constructor() { }

  ngOnInit() {
    this.redactaMensaje();
  }

  private redactaMensaje(): string{
    return this.mensaje = "Error: Petición fallída."
  }
}
