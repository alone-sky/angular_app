import { Injectable } from '@angular/core';
// 官方错误的方式
// import { Observable, of } from 'rxjs';

// 正确的方式
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  // 官方错误的方式
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return Observable.of(HEROES);
  }

  constructor(private messageService: MessageService) {

  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return  Observable.of(HEROES.find(hero => hero.id === id));
  }

}
