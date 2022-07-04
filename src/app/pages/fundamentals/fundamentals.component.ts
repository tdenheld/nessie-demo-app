import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})

export class PageFundamentalsComponent implements OnInit {
  private className: string = 'nes-scroll-smooth';
  
  constructor() { }

  ngOnInit(): void {
    document.querySelector('html')?.classList.add(this.className);
  }

  ngOnDestroy() {
    document.querySelector('html')?.classList.remove(this.className);
  }
}
