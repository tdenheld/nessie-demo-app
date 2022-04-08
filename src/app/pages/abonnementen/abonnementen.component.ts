import { Component, OnInit } from '@angular/core';
import subscriptions from '../../../data/subscriptions.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abonnementen',
  templateUrl: './abonnementen.component.html',
  styleUrls: ['./abonnementen.component.css']
})
export class PageAbonnementenComponent implements OnInit {
  showMessageToast = false;

  goto(route: string) {
    this.router.navigate([`/abonnementen/${route}`]);
  };

  getOddSubs(type: string) {
    return type === 'overig' || type === 'extra';
  }

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

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.showMessageToast;
  }

}
