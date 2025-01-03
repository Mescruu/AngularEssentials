import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_USERS} from "../dummy-users";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, UserComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) public name?: string; //? oznacza, że może być undefind albo null w tym przypadku
  //@Input() public name: string | undefined; // inny sposób na zapisanie tego co powyżej
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: "Master Angular",
      summary: 'Learn all the basics',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: "Learn TypeScript",
      summary: 'Understand types, interfaces, and generics',
      dueDate: '2024-06-15',
    },
    {
      id: 't3',
      userId: 'u3',
      title: "Practice RxJS",
      summary: 'Work with Observables and Subjects',
      dueDate: '2024-09-10',
    },
    {
      id: 't4',
      userId: 'u4',
      title: "Build an Angular Project",
      summary: 'Create a real-world project to practice skills',
      dueDate: '2025-03-01',
    },
    {
      id: 't5',
      userId: 'u5',
      title: "Improve Debugging Skills",
      summary: 'Learn effective debugging techniques in Angular',
      dueDate: '2024-12-20',
    }
  ]
  protected readonly users = DUMMY_USERS;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
