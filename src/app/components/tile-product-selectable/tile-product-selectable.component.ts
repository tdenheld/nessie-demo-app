import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-product-selectable',
  templateUrl: './tile-product-selectable.component.html',
  styleUrls: ['./tile-product-selectable.component.scss']
})
export class TileProductSelectableComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() usps:string[] = [];
  @Input() price: number = 0;
  @Input() checked: boolean = false;

  constructor() { }
  ngOnInit(): void { }
}
