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
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  DeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(characters => characters.id !== id);
  }
}
