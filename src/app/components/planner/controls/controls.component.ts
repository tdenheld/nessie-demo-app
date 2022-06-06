import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planner-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  public departure = true;

  constructor() { }

  ngOnInit(): void {
  }

}
