import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PageHomeComponent implements OnInit {
  routes = [
    { name: 'Form', url: '/form' },
  ];
  constructor() { }
  ngOnInit(): void { }
}
