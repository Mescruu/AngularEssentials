import {TaskData} from "./task/task.model";
import {Injectable} from "@angular/core";

/**
 * Serwis zajmujący się logiką komponentu/zadań
 * Dekorator `@Injectable` oznacza, że klasa może być używana jako serwis Angulara
 * `providedIn: 'root'` oznacza, że Angular automatycznie doda tę usługę (_serwis_) do głównego drzewa zależności aplikacji (root injector)
 * Mechanizm `{providedIn: 'root'}` pozwala uniknąć ręcznego dodawania serwisów do sekcji `providers` w dekoratorze `@NgModule`.
 */
@Injectable({providedIn: 'root'}) //
export class TasksService {

private tasks = [
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

  /**
   * Metoda zwracająca konkretne zadanie
   * @param userId
   */
  public getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

 public addUserTask(taskData: TaskData, userId: string) {
    this.tasks.push({ // na koniec tabeli dodajemy nasze nowe zadanie
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
  }

  public removeUserTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
