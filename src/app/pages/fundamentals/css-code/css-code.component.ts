import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-code',
  templateUrl: './css-code.component.html',
  styleUrls: ['./css-code.component.scss']
})
export class CssCodeComponent implements OnInit {
  @Input() util: string = '';
  @Input() class: string = '';
  @Input() html: string = '';

  constructor() { }
  ngOnInit(): void { }
}
