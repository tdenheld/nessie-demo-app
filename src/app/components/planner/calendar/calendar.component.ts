import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/nl';
moment.locale('nl');

@Component({
  selector: 'planner-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class PlannerCalendarComponent implements OnInit {
  private HIDE_DELAY = 300;

  public active = false;
  public show = false;

  public time = '';
  private timeInterval: any;
  private timer: any;
  private timeIncrement = 0;

  public depArrToggle = 'Vertrek';

  @ViewChild('calendar') modal: any;

  public setTimeNow() {
    this.time = moment().format('LT');

    this.timeInterval = setInterval(() => {
      this.time = moment().format('LT');
    }, 1000);

    this.timeIncrement = 0;
    this.getTimeNow();
  }

  public getTimeNow() {
    const now = moment().format('LT');
    return this.time === now ? 'nu' : this.time;
  }

  public changeTime(direction: string) {
    if (direction === '-') {
      this.timeIncrement -= 30;
    } else {
      this.timeIncrement += 30;
    }

    const remainder = this.timeIncrement - (moment().minute() % 30);
    this.time = moment().add(remainder, 'minutes').format('LT');
    clearInterval(this.timeInterval);
    this.getTimeNow();
  }

  public toggleModal() {
    this.active = !this.active;

    if (this.active) {
      this.show = true;
      clearTimeout(this.timer);
    } else {
      this.timer = setTimeout(() => {
        this.show = false;
      }, this.HIDE_DELAY);
    }
  }

  public hideModal(e: Event) {
    if (!this.modal.nativeElement.contains(e.target)) {
      this.active = false;
      setTimeout(() => {
        this.show = false;
      }, this.HIDE_DELAY);
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(e: Event) {
    this.hideModal(e);
  }

  @HostListener('document:focusin', ['$event'])
  onFocusIn(e: Event) {
    this.hideModal(e);
  }

  constructor() { }

  ngOnInit(): void {
    this.setTimeNow();
  }
}
