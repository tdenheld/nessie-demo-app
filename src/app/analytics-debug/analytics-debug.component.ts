import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-analytics-debug',
  templateUrl: './analytics-debug.component.html',
  styleUrls: ['./analytics-debug.component.css']
})
export class AnalyticsDebugComponent implements OnInit {

  constructor(private as: AnalyticsService) { 
    this.as.open.subscribe(open => this.open = open);
  }

  public open: boolean = false;

  public events = this.as.analyticEvents;
  public JSON = JSON;
  
  public close(): void{
    this.as.closeDebugWindow();
  }

  ngOnInit(): void {
  }

}
