import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traject',
  templateUrl: './traject.component.html',
  styleUrls: ['./traject.component.css']
})
export class PageTrajectComponent implements OnInit {
  public usps = [
    "Geen toeslag van € 1 op je treinkaartje",
    "Geen wachtrijen bij de balie of kaartautomaat",
    "Direct op pad!",
  ];

  public specs = [
    {
      icon: "clock",
      label: "28 min reistijd"
    },
    {
      icon: "map",
      label: "39 km afstand"
    },
    {
      icon: "train",
      label: "172 dagelijkse treinen"
    }
  ]

  constructor() { }
  ngOnInit(): void { }

}
