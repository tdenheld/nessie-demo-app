import { Component, OnInit } from '@angular/core';
import subscriptions from '../../../data/subscriptions.json';

@Component({
  selector: 'app-abonnementen',
  templateUrl: './abonnementen.component.html',
  styleUrls: ['./abonnementen.component.css']
})
export class PageAbonnementenComponent implements OnInit {
  showMessageToast = false;
  
  subscriptions = [{
    heading: 'Gratis basisabonnement',
    products: subscriptions.filter(subs => subs.type === 'gratis')
  }, {
    heading: 'Reizen met korting',
    products: subscriptions.filter(subs => subs.type === 'korting')
  },
  {
    heading: 'Onbeperkt reizen',
    products: subscriptions.filter(subs => subs.type === 'vrij')
  },
  {
    heading: 'Overige abonnementen',
    products: subscriptions.filter(subs => subs.type === 'overig')
  },
  {
    heading: 'Extra mogelijkheden',
    products: subscriptions.filter(subs => subs.type === 'extra')
  }];

  getOddSubs(type: string) {
    return type === 'overig' || type === 'extra';
  }

  constructor() { }
  ngOnInit(): void { 
    this.showMessageToast;
  }

}
