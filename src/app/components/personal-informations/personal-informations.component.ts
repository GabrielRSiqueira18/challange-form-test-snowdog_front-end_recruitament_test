import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-informations',
  templateUrl: './personal-informations.component.html',
  styleUrl: './personal-informations.component.scss'
})
export class PersonalInformationsComponent {
  public formSubmit(form: NgForm) {
    console.log(form.value)
  }
}
