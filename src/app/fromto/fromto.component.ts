import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-fromto',
  templateUrl: './fromto.component.html',
  styleUrls: ['./fromto.component.css']
})
export class FromtoComponent implements OnInit {
  fromActive = false;
  fromFocus = false;
  toFocus = false;
  swap = false;

  mobile = true;

  getMobile() {
    requestAnimationFrame(() => {
      this.mobile = innerWidth < 740 || false;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getMobile();
  }

  async getStations(value: string) {
    const response = await fetch(`https://gateway.apiportal.ns.nl/rio-autosuggest-api/stations?q=${value}&countryCode=nl`, {
      headers: {
        'Ocp-Apim-Subscription-Key': '5f6d82eb0e6b412f99d35c4125982b80'
      }
    });
    return await response.json();
  }

  mockGroupedAPI = [
    {
      heading: 'Favorieten',
      items: [{
        label: 'Utrecht Centraal',
        subtext: 'Thuis',
        icon: 'station',
      },],
    },
    {
      heading: 'Eerder gekozen',
      items: [{
        label: 'Deventer',
        subtext: 'Treinstation',
        icon: 'station',
      },
      {
        label: 'Rotterdam Alexander',
        subtext: 'Treinstation',
        icon: 'station',
      },
      {
        label: 'Leeuwarden Camminghaburen',
        subtext: 'Treinstation',
        icon: 'station',
      },
      {
        label: 'Bunnik',
        subtext: 'Treinstation',
        icon: 'station',
      },
      ],
    },
  ];

  constructor() { }
  ngOnInit(): void {
    this.getMobile();

    this.getStations('ut').then((arr) => {
      arr.map((val: any) => {
        console.log(val.naam);
      });
    });
  }
}
