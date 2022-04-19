import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class PageCheckoutComponent implements OnInit {
  getStoredStation(location: string) {
    return localStorage.getItem(location);
  }

  constructor() { }
  ngOnInit(): void {
    document.querySelector("html")?.classList.add("nes-bg-elevated");
  }

  ngOnDestroy() {
    document.querySelector("html")?.classList.remove("nes-bg-elevated");
  }
}
