import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ampli, MiddlewarePayload } from 'src/ampli';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { 
    let events:MiddlewarePayload[] = [];
    ampli.addEventMiddleware((payload, next) => {
      console.log(payload);
      events = [...events, payload]
      this.analyticEvents.next(events);
      next(payload);
    });
  }

  public open = new BehaviorSubject(false)

  public openDebugWindow(): void{
    this.open.next(true);
  }

  public closeDebugWindow(): void{
    this.open.next(false);
  }

  public analyticEvents = new Subject<MiddlewarePayload[]>();
}
