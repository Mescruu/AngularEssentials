import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core'; //signal umożliwia nam używanie sygnalizacji
import { type User } from './user.model';

import {DUMMY_USERS} from "../dummy-users";

// podobne jak interface
// type User = {
//   id: string,
//   name?: string,
//   avatar?: string
// }

// przeniesione do user.model.ts
// interface User {
//   id: string,
//   name?: string,
//   avatar?: string
// }


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Ustawiamy wartość jako wartość wejśćiową
  // Dodatkowo oznaczamy typ jako string dodatkowo ! oznacza, że może być nullable (wyłom, kiedy określamy, że coś jest required)
  @Input({required: true}) public avatar!: string;
  @Input({required: true}) public name!: string;
  //avatar = input.required<string>();
  //name = input.required<string>();
  //imagePath = computed(() => { return 'assets/users/'+this.avatar()})
  @Input({required: true}) public id!: string;
  // pozwala na emitowanie wartości na zewnątrz (dodatkowo ustalamy jaki ma być output
  @Output() select = new EventEmitter<string>();
  // nie wymaga tworzenia eventemittera, jednak musimy zaznaczyć jaki jest output tej funkcji output
  select2 = output<string|undefined>();

// zamiast powyższych inputów użyjmy jednego
  @Input({required: true}) public user?: User;

  // flaga sprawdzająca czy aktualny komponent jest kliknięty
  @Input({required: true}) selected!: boolean;

  /**
   * Zwraca ścieżkę do awatara użytkownika
   */
  get imagePath(){
    return this.user ? ('assets/users/' + this.user.avatar) : undefined;
  }

  /**
   * Metoda wywoływana na click usera
   * emituj identyfikator usera
   * emit2 wykorzystuje emitter'a
   */
  public onSelectUser(){
    this.select.emit(this.user ? this.user.id : undefined);
    this.select2.emit(this.user ? this.user.id : undefined);
  }
}
