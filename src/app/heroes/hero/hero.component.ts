import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    // return this.name + " " + this.age;
    return ` ${this.name} - ${this.age}`
  }

  changeHero(): void {
    //TODO: cambiar el nombre del heroe
    this.name = "batman";
  }
  changeAge(): void {
    this.age = 50;
  }
  resertForm() {
    this.name = "spiderman";
    this.age = 40;
  }
}
