import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PageIndexComponent implements OnInit {
  routes = [
    { name: 'Campaign', subtext: 'NS Flex abonnementen', url: '/campaign' },
    { name: 'Abonnementen', subtext: 'Overzichtspagina', url: '/abonnementen' },
    { name: 'Product', subtext: 'Dal Voordeel', url: '/abonnementen/dal-voordeel' },
    { name: 'Tickets', subtext: 'Losse kaartjes en toeslagen', url: '/kaartjes' },
    { name: 'Checkout', subtext: 'Koop een treinkaartje', url: '/kaartjes/checkout' },
    { name: 'Form', subtext: 'Geld terug bij vertraging', url: '/form' },
  ];
  constructor() { }
  ngOnInit(): void { }
}
