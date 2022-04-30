import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import places from 'src/data/places.json';

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

  mockGroupedAPI = places;

  @ViewChild('locationFrom') locationFrom: any;
  @ViewChild('locationTo') locationTo: any;

  focusTo() {
    this.locationTo.nativeElement.nesFocus();
  }

  submit() {
    if (!this.locationFrom.nativeElement.value) {
      this.locationFrom.nativeElement.nesFocus();
    }
    if (this.locationFrom.nativeElement.value && !this.locationTo.nativeElement.value) {
      this.locationTo.nativeElement.nesFocus();
    }
    if (this.locationFrom.nativeElement.value && this.locationTo.nativeElement.value) {
      this.router.navigate([`/planner`]);
    }
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

  constructor(private router: Router) { }
  ngOnInit(): void {

  }

}
