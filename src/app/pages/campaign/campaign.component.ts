import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  ngOnInit(): void { }
}
