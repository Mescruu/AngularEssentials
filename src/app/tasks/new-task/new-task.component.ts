import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type TaskData} from "../task/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>(); // zamiast void można zostawić puste
  @Output() add = new EventEmitter<TaskData>(); //chcemy zwrócić obiekt z danymi z forma (TaskData zdefiniowany jest w task.model.ts)
  public enteredTitle = signal(''); // przykład z sygnalistą
  public enteredSummary = '';
  public enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title:this.enteredTitle(), // dla nauki mamy sygnalistę, więc musimy inaczej pobrać tę zmienną właśnie poprzez ()
      summary:this.enteredSummary,
      date:this.enteredDate,
    })
  }
}
