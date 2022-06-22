import { Component, OnInit } from '@angular/core';
const tailwind = require('@nessie/web-fundamentals/build/web/tailwind.config');

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  public type = Object.entries(tailwind.theme.fontSize).reverse();
  public leading = Object.entries(tailwind.theme.lineHeight);

  public remove(str: string, removeStr: string) {
    return str.replace(removeStr, '').toLowerCase();
  }

  public fontWeights = ['bold', 'regular'];

  constructor() { }
  ngOnInit(): void { }
}
