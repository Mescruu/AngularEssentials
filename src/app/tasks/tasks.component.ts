import {Component, EventEmitter, Input, output, Output} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_USERS} from "../dummy-users";
import {UserComponent} from "../user/user.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskData} from "./task/task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, UserComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  public isAddingTask: boolean = false;

  @Input({required: true}) userId!: string;
  @Input({required: true}) public name?: string; //? oznacza, że może być undefind albo null w tym przypadku
  //@Input() public name: string | undefined; // inny sposób na zapisanie tego co powyżej

  // nie możemy zrobić tego w poniższy sposób, ponieważ chcemy mieć jedną instancję tego serwisu wszędzie
  //  private tasksService = new TasksService();
  // dlatego używamy dependencyInjection
  /**
   * dependency injection of service tasksService
   * Moglibyśmy też wynieś pole poza konstruktor zamiast używać private tasksService:...
   * dzięki dekoratorowi Injectable możemy użyć go jako serwisu
   * @param tasksService
   */
  constructor(private tasksService: TasksService) {}

  protected readonly users = DUMMY_USERS;

  get selectedUserTasks(){
    // po staremu jak mieliśmy kolekcję zadań w tym komponencie
    // return this.tasks.filter((task) => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }
  // Aktualnie jest to zapewnione w komponencie zadania
  // onCompleteTask(id: string){
  //   // po staremu jak mieliśmy kolekcję zadań w tym komponencie
  //   //this.tasks = this.tasks.filter((task) => task.id !== id); // filtrujemy po tych, których id jest inny niż ten zakończony
  //   return this.tasksService.removeUserTask(id);
  // }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseEvent(){
    this.isAddingTask = false;
  }

}
