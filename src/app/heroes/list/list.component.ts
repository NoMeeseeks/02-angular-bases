import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ['Spiderman', 'Hulk', 'Batman', 'Thor', 'Xavier'];
  public deleteHero?: string = '';

  removeLastHeroe(): void {
    this.deleteHero = this.heroesName.pop();

  }

}
