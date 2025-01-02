import {Component, computed, signal} from '@angular/core'; //signal umożliwia nam używanie sygnalizacji
import {DUMMY_USERS} from "../dummy-users";
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // bierze random indeks z tabeli DUMMY_USERS
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // nazwa pola na start bierze randomIndex element
  // signal powoduje, że każdy obiekt, który używa tej zmiennej zostanie
  // powiadomiony, że wartość się zmieniła, zatem należy ją odświeżyć
  public selectedUser = signal(DUMMY_USERS[randomIndex])
  // Wywołujemy angularową funkcję computed , która jest powiązana z sygnalistą.
  // Funkcja ta nam wybiera odświeżoną wartość z sygnalisty
  public imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // getter - metoda, którą możemy wywoływać z zewnątrz
  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar; // zanim użyliśmy signala
  // }

  public getImagePath(){
    //   return 'assets/users/' + this.selectedUser.avatar; // zanim użyliśmy signala
  }

  /**
   * Metoda wywoływana na click usera
   */
  public onSelectUser(){
    console.log('Click');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // bierze random indeks z tabeli DUMMY_USERS
    // this.selectedUser = DUMMY_USERS[randomIndex]; zanim użyliśmy signala
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
