import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-data',
  templateUrl: './color-data.component.html',
  styleUrls: ['./color-data.component.scss']
})
export class ColorDataComponent implements OnInit {
  @Input() key: string = '';
  @Input() value: string = '';

  constructor() { }
  ngOnInit(): void { }
}
