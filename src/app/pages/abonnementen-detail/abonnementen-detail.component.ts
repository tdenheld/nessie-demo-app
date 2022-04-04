import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import subscriptions from '../../../data/subscriptions.json';

@Component({
  selector: 'app-abonnementen-detail',
  templateUrl: './abonnementen-detail.component.html',
  styleUrls: ['./abonnementen-detail.component.css']
})
export class PageAbonnementenDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.product = subscriptions.find(subs => subs.id === this.route.snapshot.params['id']);
  }
}
