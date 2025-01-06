import {NgModule} from "@angular/core";
import {TasksComponent} from "./tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskComponent} from "./task/task.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [TasksComponent,TaskComponent, NewTaskComponent], // mamy w tym module tylko CardComponent
  exports: [TasksComponent], //elementy, które chcemy exportować na zewnątrz
  imports: [
    SharedModule,// musimy zaimportować dodatkować SharedModule (ponieważ go wykorzystujemy w naszym module)
    FormsModule, // dodatkowo potrzebujemy FormsModule ponieważ używamy go przy dodawaniu zadania,
    CommonModule, // zamiast BrowserModule, który posiada COmmonModule musimy właśnie zaimportować Common dla DatePipe, któy wykorzystujemy, nie możemy zaimportować BrowseModule, ponieważ jest on zarekwirowany tylko dla naszego RootModule!
  ]
})
export class TasksModule {}
