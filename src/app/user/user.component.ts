import { Component } from '@angular/core';
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
  public selectedUser = DUMMY_USERS[randomIndex] // nazwa pola na start bierze randomIndex element

  // getter - metoda, którą możemy wywoływać z zewnątrz
  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  public getImagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  /**
   * Metoda wywoływana na click usera
   */
  public onSelectUser(){
    console.log('Click');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // bierze random indeks z tabeli DUMMY_USERS
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
