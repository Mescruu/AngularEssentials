import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() public name?: string; //? oznacza, że może być undefind albo null w tym przypadku
  //@Input() public name: string | undefined; // inny sposób na zapisanie tego co powyżej
}
