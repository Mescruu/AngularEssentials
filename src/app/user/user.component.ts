import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core'; //signal umożliwia nam używanie sygnalizacji
import {DUMMY_USERS} from "../dummy-users";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Ustawiamy wartość jako wartość wejśćiową
  // Dodatkowo oznaczamy typ jako string dodatkowo ! oznacza, że może być nullable
  @Input({required: true}) public avatar!: string;
  @Input({required: true}) public name!: string;
  //avatar = input.required<string>();
  //name = input.required<string>();
  //imagePath = computed(() => { return 'assets/users/'+this.avatar()})
  @Input({required: true}) public id!: string;
  // pozwala na emitowanie wartości na zewnątrz (dodatkowo ustalamy jaki ma być output
  @Output() select = new EventEmitter<string>();
  // nie wymaga tworzenia eventemittera, jednak musimy zaznaczyć jaki jest output tej funkcji output
  select2 = output<string>();

  /**
   * Zwraca ścieżkę do awatara użytkownika
   */
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  /**
   * Metoda wywoływana na click usera
   * emituj identyfikator usera
   * emit2 wykorzystuje emitter'a
   */
  public onSelectUser(){
    this.select.emit(this.id);
    this.select2.emit(this.id);
  }
}
