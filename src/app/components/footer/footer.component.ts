import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data = {
    content: [
      {}
    ],
    terms: [
      'disclaimer',
      'privacy',
      'cookies',
      'bedrijfsinformatie',
      'voorwaarden en folders',
    ]
  };

  constructor() { }
  ngOnInit(): void { }
}
