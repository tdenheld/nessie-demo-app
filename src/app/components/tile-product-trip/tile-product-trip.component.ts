import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-tile-product-trip',
  templateUrl: './tile-product-trip.component.html',
  styleUrls: ['./tile-product-trip.component.scss']
})
export class TileProductTripComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() button: string | undefined;
  @Input() route = { from: 'Groningen', to: 'Deventer' };
  @Input() description: string | undefined;
  @Input() sticker: string | undefined;
  @Input() price: number = 0;
  @Input() discount: number | undefined;
  @Input() tinted: boolean = false;

  @Output() edit = new EventEmitter();

  public tooltip: boolean = false;

  constructor() { }
  ngOnInit(): void { }
}
