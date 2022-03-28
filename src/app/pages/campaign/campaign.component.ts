import { Component, OnInit } from '@angular/core';
import subscriptions from '../../../data/subscriptions.json';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class PageCampaignComponent implements OnInit {
  usps = [{
    title: 'Maandelijks wijzigen of opzeggen',
    description: 'Je reist altijd met het voordeel dat past bij je reizen. En je zit nergens aan vast.',
    icon: 'filter',
  },
  {
    title: 'Betaal reiskosten maandelijks achteraf',
    description: 'Je betaalt je reiskosten voor trein, bus, tram en metro maandelijks via automatische incasso.',
    icon: 'invoice',
  },
  {
    title: 'Reis direct met trein, bus, tram en metro',
    description: 'Je checkt zorgeloos in en uit bij de trein, bus, tram en metro zonder dat je saldo nodig hebt.',
    icon: 'tram',
  },];

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

  subscriptions = subscriptions.filter(subs =>
    subs.title === 'Weekend Voordeel' ||
    subs.title === 'Dal Voordeel' ||
    subs.title === 'Altijd Voordeel'
  );

  constructor() { }
  ngOnInit(): void { }
}
