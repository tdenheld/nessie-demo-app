import { Component, OnInit } from '@angular/core';
import tokens from '@nessie/web-fundamentals/build/web/tokens.json';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  private filterKeys(obj: {}, str: string) {
    return Object.entries(obj).filter(([key, value]) => {
      if (key.startsWith(str)) {
        return key.includes(str);
      } else {
        return '';
      }
    });
  }

  public type = this.filterKeys(tokens, 'nesFontSize').reverse();

  public replace(str: string) {
    return str.replace('nesFontSize', '').toLowerCase();
  }

  constructor() { }
  ngOnInit(): void { }
}
