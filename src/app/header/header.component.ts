import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false, // domyślnie jest to true, jednak lepiej ustawić - false jest dla komponentów modularnych
  // template: '<h1>Hello World</h1>', // nie jest to rekomendowane, żeby dawać w tej zmiennej templatkę htmla
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  //styles: ['h1 {color: red}'] // nie jest to rekomendowane tak jak w przypadku template
})
export class HeaderComponent {

}
