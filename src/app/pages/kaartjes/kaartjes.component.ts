import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kaartjes',
  templateUrl: './kaartjes.component.html',
  styleUrls: ['./kaartjes.component.css']
})
export class PageKaartjesComponent implements OnInit {
  mockGroupedAPI = [{
    heading: "Favorieten",
    items: [{
      label: "Thuis",
      subtext: "Utrecht Centraal",
      icon: "station",
      button: {
        ariaLabel: "Menu",
        icon: "menu-dots",
      },
    },],
  },
  {
    heading: "Eerder gekozen",
    items: [{
      label: "Deventer",
      subtext: "Treinstation",
      icon: "station",
      button: {
        ariaLabel: "Favorite",
        icon: "heart",
      },
    },
    {
      label: "Rotterdam Alexander",
      subtext: "Treinstation",
      icon: "station",
      button: {
        ariaLabel: "Favorite",
        icon: "heart",
      },
    },
    {
      label: "Leeuwarden Camminghaburen",
      subtext: "Treinstation",
      icon: "station",
      button: {
        ariaLabel: "Favorite",
        icon: "heart",
      },
    },
    {
      label: "Bunnik",
      subtext: "Treinstation",
      icon: "station",
      button: {
        ariaLabel: "Favorite",
        icon: "heart",
      },
    },
    ],
  },
  ];

  constructor() { }
  ngOnInit(): void { }

}
