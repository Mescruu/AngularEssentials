import {NgModule} from "@angular/core";
import {CardComponent} from "./card/card.component";

@NgModule({
  declarations: [CardComponent], // mamy w tym module tylko CardComponent
  exports: [CardComponent], //elementy, które chcemy exportować na zewnątrz
})
export class SharedModule {}
