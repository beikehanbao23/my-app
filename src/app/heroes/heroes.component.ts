import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = '盖伦';

  hero: Hero = {
    id: 1,
    name: 'gaylun',
    caption: '盖伦'
  };

  constructor() { }

  ngOnInit() {
  }

}
