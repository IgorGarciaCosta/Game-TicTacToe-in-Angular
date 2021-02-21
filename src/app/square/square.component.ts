import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',//name the component will be used in html
  template: `
      <button nbButton *ngIf="!value" style="width:100%; height:100%">{{value}}</button>
      <button nbButton hero status="success" *ngIf="value=='X'" style="width:100%; height:100%">{{value}}</button>
      <button nbButton hero status="info" *ngIf="value=='O'" style="width:100%; height:100%">{{value}}</button>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
