import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traject',
  templateUrl: './traject.component.html',
  styleUrls: ['./traject.component.css']
})
export class PageTrajectComponent implements OnInit {
  usps = [
    "Geen toeslag van € 1 op je treinkaartje",
    "Geen wachtrijen bij de balie of kaartautomaat",
    "Direct op pad!",
  ];

  constructor() { }
  ngOnInit(): void { }

}
