import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fromto',
  templateUrl: './fromto.component.html',
  styleUrls: ['./fromto.component.css']
})
export class FromtoComponent implements OnInit {
  fromActive = false;
  toActive = false;

  mockGroupedAPI = [
    {
      heading: "Favorieten",
      items: [{
        label: "Utrecht Centraal",
        subtext: "Thuis",
        icon: "station",
      },],
    },
    {
      heading: "Eerder gekozen",
      items: [{
        label: "Deventer",
        subtext: "Treinstation",
        icon: "station",
      },
      {
        label: "Rotterdam Alexander",
        subtext: "Treinstation",
        icon: "station",
      },
      {
        label: "Leeuwarden Camminghaburen",
        subtext: "Treinstation",
        icon: "station",
      },
      {
        label: "Bunnik",
        subtext: "Treinstation",
        icon: "station",
      },
      ],
    },
  ];

  constructor() { }
  ngOnInit(): void { }

}
