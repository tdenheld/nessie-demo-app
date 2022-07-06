import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt-keuzehulp',
  templateUrl: './receipt-keuzehulp.component.html',
  styleUrls: ['./receipt-keuzehulp.component.scss']
})
export class ReceiptKeuzehulpComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  public addTripActive: boolean = false;
  
  log() {
    console.log("test");
  }
}
