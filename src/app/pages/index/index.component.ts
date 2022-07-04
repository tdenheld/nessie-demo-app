import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class PageIndexComponent implements OnInit {
  routes = [
    { name: 'Homepage', subtext: 'NS.nl landing', url: '/home' },
    { name: 'Traject', subtext: 'Dynamische trajectpagina', url: '/kaartjes/traject' },
    { name: 'Campaign', subtext: 'NS Flex abonnementen', url: '/campaign' },
    { name: 'Abonnementen', subtext: 'Overzichtspagina', url: '/abonnementen' },
    { name: 'Product', subtext: 'Dal Voordeel', url: '/abonnementen/dal-voordeel' },
    { name: 'Keuzehulp', subtext: 'Resultaatpagina', url: '/abonnementen/keuzehulp/resultaat' },
    { name: 'Tickets', subtext: 'Losse kaartjes en toeslagen', url: '/kaartjes' },
    { name: 'Checkout', subtext: 'Koop een treinkaartje', url: '/kaartjes/checkout' },
    { name: 'Form', subtext: 'Geld terug bij vertraging', url: '/form' },
    { name: 'Fundamentals', subtext: 'Colors, Typography and more', url: '/fundamentals' },
  ];
  constructor() { }
  ngOnInit(): void { }
}
