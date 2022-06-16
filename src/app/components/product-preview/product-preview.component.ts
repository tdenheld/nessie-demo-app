import { Component, OnInit, Input } from '@angular/core';
import subscriptions from 'src/data/subscriptions.json';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  @Input() heading: string = '';
  @Input() link: boolean = false;
  @Input() buttonVariant: string = 'brand';

  @Input() subscriptions = subscriptions.filter(subs =>
    subs.title === 'Weekend Voordeel' ||
    subs.title === 'Dal Voordeel' ||
    subs.title === 'Altijd Voordeel'
  );;

  constructor() { }
  ngOnInit(): void { }
}
