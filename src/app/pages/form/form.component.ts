import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class PageFormComponent implements OnInit {

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

  transportOptions = [{
    value: true,
    label: "OV-chipkaart",
  },
  {
    value: false,
    label: "Eenmalige chipkaart",
    helpText: "Papieren kaartje met chip erin",
  },
  {
    value: false,
    label: "E-ticket of mobiel ticket",
  },
  ];

  klasse = [{
    value: true,
    label: "2e klas",
    checked: true,
  },
  {
    value: false,
    label: "1e klas",
  },
  ];

  typeTravel = [{
    value: true,
    label: "Enkele reis",
    checked: true,
  },
  {
    value: false,
    label: "Retour",
  },
  ];

  constructor() { }
  ngOnInit(): void {
    document.querySelector("html")?.classList.add("nes-bg-elevated");
  }

  ngOnDestroy() {
    document.querySelector("html")?.classList.remove("nes-bg-elevated");
  }
}
