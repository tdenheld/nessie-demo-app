import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isDark: boolean = false;

  toggleDarkMode() {
    const root = document.querySelector("html");
    !this.isDark ? root?.classList.add("is-dark") : root?.classList.remove("is-dark");
    this.isDark = !this.isDark;
  }

  constructor() { }
  ngOnInit(): void { }
}
