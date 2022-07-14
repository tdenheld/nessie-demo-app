import { Component, OnInit } from '@angular/core';
import places from 'src/data/places.json';

@Component({
  selector: 'page-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class PageFormComponent implements OnInit {
  mockGroupedAPI = places;

  context: boolean = false;

  transportOptions = [{
    value: true,
    label: 'OV-chipkaart',
  },
  {
    value: false,
    label: 'Eenmalige chipkaart',
    helpText: 'Papieren kaartje met chip erin',
  },
  {
    value: false,
    label: 'E-ticket of mobiel ticket',
  },
  ];

  klasse = [{
    value: true,
    label: '2e klas',
    checked: true,
  },
  {
    value: false,
    label: '1e klas',
  },
  ];

  typeTravel = [{
    value: true,
    label: 'Enkele reis',
    checked: true,
  },
  {
    value: false,
    label: 'Retour',
  },
  ];

  constructor() { }
  ngOnInit(): void {
    document.querySelector('html')?.classList.add('nes-bg-elevated');
  }

  ngOnDestroy() {
    document.querySelector('html')?.classList.remove('nes-bg-elevated');
  }
}
