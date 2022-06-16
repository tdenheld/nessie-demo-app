import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-flex',
  templateUrl: './more-flex.component.html',
  styleUrls: ['./more-flex.component.scss']
})
export class MoreFlexComponent implements OnInit {
  more = [{
    title: 'Automatische correctie als je vergeet uit te checken',
    description: 'Je kunt tot 6 uur na je reis alsnog uitchecken. Lukt dat niet? Dan proberen we het automatisch te corrigeren als we dat kunnen achterhalen, bijvoorbeeld omdat je vaak dezelfde route aflegt.',
    icon: 'check-circle',
  },
  {
    title: 'OV-fiets en fietsenstalling inbegrepen',
    description: 'De kosten voor het gebruik van de OV-fiets en de fietsenstalling betaal je ook op rekening. Ook hier hoef je geen saldo voor te laden. Handig, spring zo vanuit de trein op de fiets.',
    icon: 'ov-fiets',
  },
  {
    title: 'Per rit gemakkelijk wisselen naar 1e klas',
    description: 'Best lekker af en toe, om 1e klas te reizen in plaats van 2e klas. Log in op Mijn NS en zet de klasse van je keuze aan. Dat kan zelfs tot 15 minuten na inchecken.',
    icon: 'swap-horizontal',
  },];

  constructor() { }
  ngOnInit(): void { }

}
