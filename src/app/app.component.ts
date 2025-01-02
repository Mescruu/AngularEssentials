import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";

@Component({ // dekorator konfigurujący naszą klasę
  selector: 'app-root', // na jaki markup ma nasza klasa być wywoływana
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html', // html naszego komponentu
  styleUrl: './app.component.css', // style naszego komponentu
})
export class AppComponent {}
