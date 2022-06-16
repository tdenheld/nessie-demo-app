import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  @Input() features = [
    ["Betalen", "Maandelijkse automatische incasso",],
    ["Te wijzigen", "Elk moment*",],
    ["Opzegbaar", "Elk moment*",],
    ["Minimum saldo op kaart", "Geen saldo nodig",],
    ["Overzicht van alle OV-reizen", "check-icon",],
    ["OV-fietsabonnement inbegrepen", "check-icon",],
    ["Na inchecken naar 1e klas wisselen", "check-icon",],
    ["Correctie na vergeten incheck", "check-icon",],
    ["40% korting in de daluren", "check-icon",],
    ["40% korting in het weekend + feestdagen", "check-icon",],
    ["40% Samenreiskorting in de daluren voor 3 medereizigers", "check-icon",],
  ];

  constructor() { }
  ngOnInit(): void { }
}
