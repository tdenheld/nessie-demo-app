import { Component, OnInit, HostListener, Input } from '@angular/core';
import places from 'src/data/places.json';

@Component({
  selector: 'app-fromto',
  templateUrl: './fromto.component.html',
  styleUrls: ['./fromto.component.scss']
})
export class FromtoComponent implements OnInit {
  @Input() yellow: boolean = true;

  fromActive = false;
  toActive = false;
  fromFocus = false;
  toFocus = false;
  swap = false;
  mobile = true;

  stations = [{}];
  station = false;

  mockGroupedAPI = places;

  setSwap() {
    const from = this.getStoredStation('locationFrom') || '';
    const to = this.getStoredStation('locationTo') || '';

    localStorage.setItem('locationFrom', to);
    localStorage.setItem('locationTo', from);

    this.swap = !this.swap;
  }

  getMobile() {
    requestAnimationFrame(() => {
      this.mobile = innerWidth < 740 || false;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getMobile();
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
            icon: 'station'
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
    this.getMobile();
  }
}
