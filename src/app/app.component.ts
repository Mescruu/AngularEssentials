import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {CommonModule} from "@angular/common";
import {TasksComponent} from "./tasks/tasks.component";

@Component({ // dekorator konfigurujący naszą klasę
  selector: 'app-root', // na jaki markup ma nasza klasa być wywoływana
  standalone: true,
  // oprócz naszych komponentów dodaje BrowserModule by użyć fora
  imports: [CommonModule, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html', // html naszego komponentu
  styleUrl: './app.component.css', // style naszego komponentu
})
export class AppComponent {
  users = DUMMY_USERS;

  // ustawienie zmiennej wybranego użytkownika na taką by przyjmowała obiekt w postaci poniżej - dodatkowo ustawiamy poczatkową wartość jako pierwszego użytkownika z listy
  // dodajemy ? żeby określić, że możemy nie mieć objektu
  public selectedUserObj?: { id: string; name: string; avatar: string } = DUMMY_USERS[0];
  public selectedUserId: string = 'u1';

  get selectedUser() {
    this.selectedUserObj = DUMMY_USERS.find(user => user.id === this.selectedUserId);// wymuszamy, że może być puste zamiast dodawać w razie co || DUMMY_USERS[0];
    return this.selectedUserObj; // || DUMMY_USERS[0]; // możemy też użyć na końcu ! zamiast || DUMMY_USERS, ! oznacza, że zawsze znajdziemy wartość i nie ma co się IDE czepiać.
  }

  onSelectUser(id: string){
    console.log('selected '+id)
    // ustawiamy wybranego użytkownika z eventu
    this.selectedUserId = id;
  }
}
