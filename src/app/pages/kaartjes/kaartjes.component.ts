import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kaartjes',
  templateUrl: './kaartjes.component.html',
  styleUrls: ['./kaartjes.component.css']
})
export class PageKaartjesComponent implements OnInit {
  fromActive = false;
  toActive = false;

  tickets = [
    {
      title: 'Dagretour',
      icon: 'round-trip',
      body: 'Heen en weer op hetzelfde traject, op je mobiel of printen.',
    },
    {
      title: 'Enkele reis',
      icon: 'one-way',
      body: 'Een enkele reis naar je bestemming, op je mobiel of printen.',
    },
    {
      title: 'Railrunner',
      icon: 'children',
      body: 'Voordelig reizen voor kinderen, op je mobiel of printen.',
      price: 2.5,
      priceTrailing: '/ kind'
    },
    {
      title: 'Groepsticket Daluren',
      icon: 'group',
      body: 'Voordelig reizen met een groep vanaf 2 personen. Geldig tijdens daluren.',
      price: 6.3,
      priceLeading: 'Vanaf',
      priceTrailing: '/ persoon'
    },
    {
      title: 'Samenreisticket Dagretour Dal',
      icon: 'co-traveler',
      body: 'Reis voordelig mee met iemand die een NS-abonnement of Studentenreisproduct heeft.',
      discount: '40%',
      discountTrailing: 'Korting op een dagretour'
    }
  ];

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
