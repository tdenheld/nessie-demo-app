import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectable',
  templateUrl: './selectable.component.html',
  styleUrls: ['./selectable.component.scss']
})

export class SelectableComponent implements OnInit {
  @Input() active: boolean = false;
  @Input() selectable: boolean = true;
  
  constructor() { }
  ngOnInit(): void { }
}
