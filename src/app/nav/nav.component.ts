import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isDark: boolean = false;

  setTheme() {
    const root = document.querySelector('html');
    localStorage.getItem('theme') === 'dark' ?
      root?.classList.add('is-dark') :
      root?.classList.remove('is-dark');
  }

  toggleDarkMode() {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }

    this.setTheme();
  }

  constructor() { }
  ngOnInit(): void {
    this.setTheme();
  }
}
