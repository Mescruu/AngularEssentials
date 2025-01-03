import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>(); // zamiast void można zostawić puste

  onCancel(){
    this.cancel.emit();
  }
}
