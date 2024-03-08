import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';
console.log(uuid);

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9800
  }, {
    id: uuid(),
    name: 'Milk',
    power: 300
  }, {
    id: uuid(),
    name: 'Xavier',
    power: 10000
  }];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }

  DeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(characters => characters.id !== id);
  }
}
