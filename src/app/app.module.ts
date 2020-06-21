import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { HelloComponent } from './hello.component';
import { SelectService } from './select.service';

@NgModule({
  declarations: [
    AppComponent,ConfirmEqualValidatorDirective,HelloComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule {
  country:any;
 }