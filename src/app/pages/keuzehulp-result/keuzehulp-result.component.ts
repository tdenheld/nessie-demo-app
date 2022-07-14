import { Component, OnInit } from '@angular/core';
import subscriptions from 'src/data/subscriptions.json';

@Component({
  selector: 'app-keuzehulp-result',
  templateUrl: './keuzehulp-result.component.html',
  styleUrls: ['./keuzehulp-result.component.scss']
})
export class PageKeuzehulpResultComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  public context: boolean = false;

  public subFeatured = {
    "title": "Traject Vrij",
    "id": "traject-vrij",
    "price": 362.40,
    "usps": [
      "Onbeperkt reizen tussen Leiden Centraal en Utrecht Centraal",
      "40% korting buiten de spits op andere trajecten",
      "40% korting in het weekend en feestdagen op andere trajecten",
      "40% Samenreiskorting buiten de spits voor 3 medereizigers"
    ],
    "type": "vrij"
  };

  public subRest = subscriptions.filter(subs =>
    subs.title === 'Altijd Vrij' ||
    subs.title === 'Dal Vrij');

  public selected: number = 1;
}
