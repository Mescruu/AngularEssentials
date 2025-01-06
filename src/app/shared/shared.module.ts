import {NgModule} from "@angular/core";
import {CardComponent} from "./card/card.component";

@NgModule({
  imports: [CardComponent], // mamy w tym module tylko CardComponent
  exports: [CardComponent], //elementy, które chcemy exportować na zewnątrz
})
export class SharedModule {}
