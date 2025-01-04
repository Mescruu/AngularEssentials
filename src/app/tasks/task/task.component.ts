import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "./task.model";
import {CardComponent} from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  @Output() complete = new EventEmitter<string>();

  /**
   * na przycisk uruchamiamy onCompleteTask, który rzuca event do komponentu tasks
   */
  onCompleteTask() {
    this.complete.emit(this.task.id);
  }

}
