import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { DropdownlistComponent } from './dropdownlist/dropdownlist.component';

@NgModule({
  declarations: [
    AppComponent,ConfirmEqualValidatorDirective, DropdownlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }