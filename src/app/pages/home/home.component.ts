import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PageHomeComponent implements OnInit {
  routes = [
    { name: 'Form', subtext: 'Geld terug bij vertraging', url: '/form' },
    { name: 'Campaign', subtext: 'NS Flex abonnementen', url: '/campaign' },
  ];
  constructor() { }
  ngOnInit(): void { }
}
