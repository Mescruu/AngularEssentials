import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {CommonModule} from "@angular/common";

@Component({ // dekorator konfigurujący naszą klasę
  selector: 'app-root', // na jaki markup ma nasza klasa być wywoływana
  standalone: true,
  // oprócz naszych komponentów dodaje BrowserModule by użyć fora
  imports: [CommonModule, HeaderComponent, UserComponent],
  templateUrl: './app.component.html', // html naszego komponentu
  styleUrl: './app.component.css', // style naszego komponentu
})
export class AppComponent {
  users = DUMMY_USERS;
}
