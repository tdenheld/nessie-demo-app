import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isDark: boolean = false;

  setTheme() {
    const root = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      root?.classList.add('is-dark');
      this.isDark = true;
    } else {
      root?.classList.remove('is-dark');
      this.isDark = false;
    }
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
