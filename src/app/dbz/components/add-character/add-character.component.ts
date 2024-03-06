import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {
    name: '',
    power: 0
  };

  addCharacter(): void {

    debugger;
    console.log(this.character.name)
    if (this.character.name.length == 0) return;

    this.onNewCharacter.emit(this.character);

    //otra forma de realizar el codigo
    this.character = { name: '', power: 0 }
    // this.character.name = '';
    // this.character.power = 0;
  }

}
