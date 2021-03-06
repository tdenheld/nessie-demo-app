import { Component, OnInit } from '@angular/core';
import { today } from 'src/utils';

@Component({
  selector: 'app-traject',
  templateUrl: './traject.component.html',
  styleUrls: ['./traject.component.scss']
})
export class PageTrajectComponent implements OnInit {
  public usps = [
    "Geen toeslag van € 1 op je treinkaartje",
    "Geen wachtrijen bij de balie of kaartautomaat",
    "Direct op pad!",
  ];

  public specs = [
    {
      icon: "clock",
      label: "28 min reistijd"
    },
    {
      icon: "map",
      label: "39 km afstand"
    },
    {
      icon: "train",
      label: "172 dagelijkse treinen"
    }
  ];

  public faq = [
    {
      heading: 'Wat is een Dagretour?',
      body: 'Philosophy love moral good disgust transvaluation mountains love justice faith sexuality good hatred reason. Justice madness endless grandeur hope suicide contradict philosophy. Christianity disgust suicide ideal christian ultimate pious justice. Madness god deceptions ultimate morality free justice faith against superiority abstract mountains self burying.'
    },
    {
      heading: 'Kan ik op tussengelegen stations uitstappen?',
      body: 'Philosophy love moral good disgust transvaluation mountains love justice faith sexuality good hatred reason. Justice madness endless grandeur hope suicide contradict philosophy. Christianity disgust suicide ideal christian ultimate pious justice. Madness god deceptions ultimate morality free justice faith against superiority abstract mountains self burying.'
    },
    {
      heading: 'Is het e-ticket persoonsgebonden?',
      body: 'Philosophy love moral good disgust transvaluation mountains love justice faith sexuality good hatred reason. Justice madness endless grandeur hope suicide contradict philosophy. Christianity disgust suicide ideal christian ultimate pious justice. Madness god deceptions ultimate morality free justice faith against superiority abstract mountains self burying.'
    },
    {
      heading: 'Kan ik mijn treinkaartje laden op een OV-chipkaart?',
      body: 'Philosophy love moral good disgust transvaluation mountains love justice faith sexuality good hatred reason. Justice madness endless grandeur hope suicide contradict philosophy. Christianity disgust suicide ideal christian ultimate pious justice. Madness god deceptions ultimate morality free justice faith against superiority abstract mountains self burying.'
    },
    {
      heading: 'Hoe laad ik mijn treinkaartje op mijn mobiel?',
      body: 'Philosophy love moral good disgust transvaluation mountains love justice faith sexuality good hatred reason. Justice madness endless grandeur hope suicide contradict philosophy. Christianity disgust suicide ideal christian ultimate pious justice. Madness god deceptions ultimate morality free justice faith against superiority abstract mountains self burying.'
    },
    {
      heading: 'Hoe kan ik inchecken met een treinkaartje op mijn mobiel?',
      body: 'Philosophy love moral good disgust transvaluation mountains love justice faith sexuality good hatred reason. Justice madness endless grandeur hope suicide contradict philosophy. Christianity disgust suicide ideal christian ultimate pious justice. Madness god deceptions ultimate morality free justice faith against superiority abstract mountains self burying.'
    },
    {
      heading: 'De treinkaarten op de selfservice pagina doen het niet.',
      body: 'Philosophy love moral good disgust transvaluation mountains love justice faith sexuality good hatred reason. Justice madness endless grandeur hope suicide contradict philosophy. Christianity disgust suicide ideal christian ultimate pious justice. Madness god deceptions ultimate morality free justice faith against superiority abstract mountains self burying.'
    }
  ];

  public today = () => today();

  getStoredStation(location: string) {
    return localStorage.getItem(location) ||
      (location === 'locationFrom' ?
        'Utrecht Zuilen' :
        'Amsterdam Amstel');
  }

  constructor() { }
  ngOnInit(): void { }

}
