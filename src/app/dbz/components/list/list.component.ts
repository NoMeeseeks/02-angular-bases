import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter;

  @Input()
  public listCharacter: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  onDeleteCharacter(id: string): void {
    console.log({ id });
    this.onDelete.emit(id);
  }
}
