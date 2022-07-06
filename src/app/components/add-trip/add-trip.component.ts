import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  @Input() active:boolean = false;

  @Output() close = new EventEmitter();

  log() {
    console.log("test");
  }
}
