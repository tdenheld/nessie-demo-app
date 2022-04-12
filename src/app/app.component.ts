import { Component } from '@angular/core';
import { ampli} from '../ampli';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nessie-demo-app';

  constructor(private as: AnalyticsService, ){
    ampli.load({ environment: 'production' });
  }

  onTest(): void{
    ampli.purchaseTest({order_id: "asdasd", order_total: 123});
  }

}
