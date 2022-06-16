import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
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

  faq = [
    {
      heading: 'Wat is NS Flex voor abonnement?',
      body: 'Met NS Flex kun je elke maand de korting kiezen die past bij je reizen. En bespaar je flink op je reiskosten. Je hoeft niet meer minimaal € 20 of € 10 saldo te laden op je OV-chipkaart. Je betaalt namelijk maandelijks achteraf via automatische incasso.'
    },
    {
      heading: 'Krijg ik met NS Flex ook korting in bus, tram en metro?',
      body: 'De korting van je NS Flex-abonnement geldt alleen op je treinreizen van NS en andere treinvervoerders. In de bus, metro en tram betaal je vol tarief en krijg je dus geen korting. Heb je een kortingsabonnement voor bus, metro of tram? Neem dan contact op met onze Klantenservice. We kunnen je kortingsabonnement dan met je NS Flex-abonnement combineren.'
    },
    {
      heading: 'Hoe wijzig ik mijn abonnement?',
      body: 'Je kunt je abonnement elke maand wijzigen door in te loggen op Mijn NS. Hier zie je ook direct welk abonnement je nu hebt. Heb je een Reizen op saldo-abonnement? Dan kun je ook via Mijn NS overstappen op een NS Flex-abonnement. Het saldo dat nog op je OV-chipkaart staat verrekenen we automatisch op je eerste NS Flex-factuur. Lees meer op de pagina Abonnement wijzigen.'
    },
    {
      heading: 'Ik reis met Keuzedagen. Kan dat ook met een NS Flex-abonnement?',
      body: 'Je kunt nog niet met Keuzedagen reizen bij NS Flex. Als je je Keuzedagen wilt blijven gebruiken, kun je dus beter nog niet overstappen naar een NS Flex-abonnement.'
    },
    {
      heading: 'Kan ik een NS Flex-abonnement combineren met een Studentenreisproduct?',
      body: 'Je kunt naast je Studentenreisproduct ook met een Flex-abonnement reizen, maar let op: dat kan niet op dezelfde OV-chipkaart. Bestel dus je NS Flex-abonnement op een nieuwe OV-chipkaart. Dit geldt ook voor andere reisproducten in combinatie met een Studentenreisproduct. Zo voorkom je een onverwachte rekening aan het einde van de maand.'
    }
  ];

  convince = [
    {
      icon: 'card',
      heading: 'Resterende saldo teruggestort',
      description: 'Stap je over op NS Flex met je huidige OV-chipkaart? Dan wordt het saldo dat nog op die kaart staat automatisch verrekend op je NS Flex-factuur.'
    },
    {
      icon: 'filter',
      heading: 'Je zit nergens aan vast',
      description: 'Of je nu veel, weinig of even helemaal niet reist; je kunt je Flex-abonnement elke maand wijzigen of opzeggen. Zo beweegt NS Flex met je mee.'
    },{
      icon: 'calendar',
      heading: 'Bedenktijd',
      description: 'Na het afsluiten van een abonnement heb je 14 dagen bedenktijd. In die tijd kun je van het abonnement afzien door middel van het herroepingsrecht.'
    },
  ];

  constructor() { }
  ngOnInit(): void { }
}
