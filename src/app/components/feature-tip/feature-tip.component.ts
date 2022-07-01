import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-tip',
  templateUrl: './feature-tip.component.html',
  styleUrls: ['./feature-tip.component.scss']
})

export class FeatureTipComponent implements OnInit {
  public show: boolean = true;

  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      this.show = false;
    }, 4000);
  }
}
