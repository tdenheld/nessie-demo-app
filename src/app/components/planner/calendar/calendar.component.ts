import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'planner-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class PlannerCalendarComponent implements OnInit {
  active = false;
  show = false;
  HIDE_DELAY = 300;

  @ViewChild('calendar') modal: any;

  toggleModal() {
    this.active = !this.active;
    if (this.active) {
      this.show = true;
    } else {
      setTimeout(() => {
        this.show = false;
      }, this.HIDE_DELAY);
    }
  }

  hideModal(e: Event) {
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
  ngOnInit(): void { }
}
