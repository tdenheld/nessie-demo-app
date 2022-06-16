import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectable',
  templateUrl: './selectable.component.html',
  styleUrls: ['./selectable.component.scss']
})

export class SelectableComponent implements OnInit {
  public active = false;

  constructor() { }
  ngOnInit(): void {}

}
