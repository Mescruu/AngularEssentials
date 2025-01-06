import { NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserModule} from '@angular/platform-browser';

/**
 * - Zapewnia podstawowe funkcjonalności wymagane do uruchomienia aplikacji Angular w przeglądarce (np. dyrektywy i mechanizmy związane z DOM).
 * - Dobrze integruje się z usługą renderowania Angular i **bootstrappingiem**.
 * - Udostępnia dyrektywy bazowe, takie jak np. **`ngIf`**, **`ngFor`**, które pozwalają rozwijać widoki dynamicznie.
 */
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {SharedModule} from "./shared/shared.module";
import {TasksModule} from "./tasks/tasks.module";

@NgModule({
  declarations: [ // komponenty, które chcemy by pracowały razem
    AppComponent, // nie mogą to być komponenty standalone
    HeaderComponent,
    UserComponent,
  ],
  imports: [ // komponenty, które chcemy by zostały zaimportowane - mogą być standalone, ważne by dodać do nich BrowserModule!
    BrowserModule,
    // FormsModule, na koneic tego nie potrzebujemy, ponieważ Forms zaciągamy w TasksModule, gdzie go wykorzystujemy
    SharedModule, // nasz własny moduł
    TasksModule // nasz własny moduł
  ],
  bootstrap: [AppComponent]   // dodatkowo musimy ustawić, który komponent jest root componentem
})
export class AppModule {

}
