import { Component, OnInit } from '@angular/core';
import subscriptions from '../../../data/subscriptions.json';

@Component({
  selector: 'app-abonnementen',
  templateUrl: './abonnementen.component.html',
  styleUrls: ['./abonnementen.component.css']
})
export class PageAbonnementenComponent implements OnInit {
  subscriptions = subscriptions;

  constructor() { }
  ngOnInit(): void { }

}
