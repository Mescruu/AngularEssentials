/* tylko w przypadku projektu, który nie jest modularny
import { bootstrapApplication } from '@angular/platform-browser';

// import komponentów
import { AppComponent } from './app/app.component';

// przechwytuje błedy a propos danego komponentu i wyrzuca błąd jako error w konsoli
bootstrapApplication(AppComponent).catch((err) => console.error(err));
*/
/**
 * - Platforma Angulara wykorzystywana do uruchamiania aplikacji w przeglądarce.
 * - Jest to narzędzie dynamiczne przeznaczone głównie na potrzeby środowiska developerskiego, gdzie kod aplikacji Angular jest interpretowany i uruchamiany w przeglądarce.
 * - W przeciwieństwie do wersji zoptymalizowanej (AOT - Ahead-of-Time), narzędzie to pozwala Angularowi interpretować kod w czasie rzeczywistym, co jest przydatne w trakcie programowania i testowania aplikacji.
 */
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
/**
 * -
 *     - Jest to główny moduł (root module) aplikacji Angular.
 *     - To właśnie w tym module definiowane są składniki (komponenty), które są częścią aplikacji.
 *     - Oprócz komponentów moduł może zawierać inne elementy, jak np. serwisy, interfejsy, oraz inne podmoduły.
 */
import {AppModule} from "./app/app.module";

/**
 * - Tworzy instancję platformy, która odpowiada za uruchamianie aplikacji Angular.
 * - bootstrapModule Jest to metoda platformy Angular, która:
 *     1. Ładuje główny moduł aplikacji (`AppModule`).
 *     2. Inicjuje aplikację.
 *     3. Ustawia główny komponent (`AppComponent`) w przeglądarce oraz wirtualnym DOM Angulara.
 *
 * - Proces ten polega na stworzeniu struktury, w której Angular obsługuje wszystkie śledzone zmiany danych
 * (Data Binding), wydarzenia użytkownika (Event Handling) oraz renderowanie interfejsu użytkownika (UI Rendering).
 */
platformBrowserDynamic().bootstrapModule(AppModule);
