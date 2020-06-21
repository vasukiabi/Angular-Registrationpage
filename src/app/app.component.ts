import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { SelectService } from './select.service';
import { Country } from './country';
import { State } from './state';

declare var NgForm:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  selectedCountry: Country = new Country(1,'USA');
  countries: Country[];
  states: State[];
 
  
  
  constructor(private formBuilder: FormBuilder,private selectService: SelectService) {
    
   }
  title = 'reactive-form-validation-in-angular8';
  myDate:number=Date.now();

  ngOnInit() {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      country:['',Validators.required],
      state:['',Validators.required],
      tnc: ['', Validators.required]

    });

  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

  get fval() { 
    return this.registerForm.controls; 
  }
  //this.user.fullName='';
  signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }

  

   
      }

