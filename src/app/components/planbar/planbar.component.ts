import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-planbar',
  templateUrl: './planbar.component.html',
  styleUrls: ['./planbar.component.css']
})
export class PlanbarComponent implements OnInit {
  fromActive = false;
  toActive = false;
  fromFocus = false;
  toFocus = false;
  swap = false;
  mobile = true;

  stations = [{}];
  station = false;

  @ViewChild('locationTo') locationTo: any;

  mockGroupedAPI = [
    {
      heading: 'Favorieten',
      items: [{
        label: 'Utrecht Centraal',
        subtext: 'Thuis',
        icon: 'station',
        button: {
          ariaLabel: "Menu",
          icon: "menu-dots",
        },
      },],
    },
    {
      heading: 'Eerder gekozen',
      items: [{
        label: 'Deventer',
        subtext: 'Treinstation',
        icon: 'station',
        button: {
          ariaLabel: "Favorite",
          icon: "heart",
        },
      },
      {
        label: 'Rotterdam Alexander',
        subtext: 'Treinstation',
        icon: 'station',
        button: {
          ariaLabel: "Favorite",
          icon: "heart",
        },
      },
      {
        label: 'Leeuwarden Camminghaburen',
        subtext: 'Treinstation',
        icon: 'station',
        button: {
          ariaLabel: "Favorite",
          icon: "heart",
        },
      },
      {
        label: 'Bunnik',
        subtext: 'Treinstation',
        icon: 'station',
        button: {
          ariaLabel: "Favorite",
          icon: "heart",
        },
      },
      ],
    },
  ];

  focusTo() {
    this.locationTo.nativeElement.nesFocus();
  }

  setSwap() {
    const from = this.getStoredStation('locationFrom') || '';
    const to = this.getStoredStation('locationTo') || '';

    localStorage.setItem('locationFrom', to);
    localStorage.setItem('locationTo', from);

    this.swap = !this.swap;
  }

  async getResponse(value: string) {
    const response = await fetch(`https://gateway.apiportal.ns.nl/rio-autosuggest-api/stations?q=${value}&countryCode=nl`, {
      headers: {
        'Ocp-Apim-Subscription-Key': '5f6d82eb0e6b412f99d35c4125982b80'
      }
    });
    return await response.json();
  }

  getStations(event: any) {
    const show = event.detail.value ? event.detail.value.length > 1 : false;

    if (show) {
      this.getResponse(event.detail.value).then((arr) => {
        this.stations = [];
        this.station = arr.length > 0 || false;

        arr.forEach((val: any) => {
          this.stations.push({
            label: val.naam,
            subtext: 'Treinstation',
            icon: 'station',
            button: {
              ariaLabel: "Favorite",
              icon: "heart",
            },
          });
        });
      });
    } else {
      this.station = false;
      this.stations = [];
    }
  }

  storeStation(event: any) {
    if (event.detail.value !== undefined) {
      localStorage.setItem(event.detail.name, event.detail.value);
    }
  }

  getStoredStation(location: string) {
    return localStorage.getItem(location) || '';
  }

  constructor() { }
  ngOnInit(): void {

  }

}
