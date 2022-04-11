import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PageHomeComponent implements OnInit {
  routes = [
    { name: 'Campaign', subtext: 'NS Flex abonnementen', url: '/campaign' },
    { name: 'Abonnementen', subtext: 'Overzichtspagina', url: '/abonnementen' },
    { name: 'Product', subtext: 'Dal Voordeel', url: '/abonnementen/dal-voordeel' },
    { name: 'Tickets', subtext: 'Losse kaartjes en toeslagen', url: '/kaartjes' },
    { name: 'Form', subtext: 'Geld terug bij vertraging', url: '/form' },
  ];
  constructor() { }
  ngOnInit(): void { }
}
