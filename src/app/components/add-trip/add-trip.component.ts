import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  @Input() active:boolean = false;
}