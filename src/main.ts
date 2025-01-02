import { bootstrapApplication } from '@angular/platform-browser';

// import komponentów
import { AppComponent } from './app/app.component';

// przechwytuje błedy a propos danego komponentu i wyrzuca błąd jako error w konsoli
bootstrapApplication(AppComponent).catch((err) => console.error(err));
