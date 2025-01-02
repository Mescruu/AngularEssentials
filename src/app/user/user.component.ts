import {Component, computed, Input, signal} from '@angular/core'; //signal umożliwia nam używanie sygnalizacji
import {DUMMY_USERS} from "../dummy-users";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Ustawiamy wartość jako wartość wejśćiową
  // Dodatkowo oznaczamy typ jako string dodatkowo ! oznacza, że może być nullable
  @Input({required: true}) public avatar!: string;
  @Input({required: true}) public name!: string;

  /**
   * Zwraca ścieżkę do awatara użytkownika
   */
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  /**
   * Metoda wywoływana na click usera
   */
  public onSelectUser(){

  }
}
