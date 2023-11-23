import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientInformationsService } from '../../services/client-informations.service';
import { ClientInformation } from '../../models/client-information';
import { CardInformation } from '../../models/card-information';

@Component({
  selector: 'app-personal-informations',
  templateUrl: './personal-informations.component.html',
  styleUrl: './personal-informations.component.scss'
})
export class PersonalInformationsComponent {
  constructor(private clientInformationsService: ClientInformationsService) {}

  private arrKeysAlloweds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace", "ArrowLeft", "ArrowRight", "Delete"];

  public onlyNumber(key: KeyboardEvent) {
    if(!this.arrKeysAlloweds.includes(key.key)) {
      key.preventDefault()
    }
  }

  public formSubmit(form: NgForm) {
    const {
      firstName,
      lastName,
      email,
      country,
      postalCode,
      phoneNumber,
      cardNumber,
      securityCode,
      expirationDate
     } = form.value

     const newClientInformations: ClientInformation = { firstName, lastName, email, country, postalCode, phoneNumber }
     const newCardClientCardNumber: CardInformation = { cardNumber, expirationDate, securityCode }

     this.clientInformationsService.addClientInformation("1", newClientInformations, newCardClientCardNumber)

     console.log(this.clientInformationsService.getClientsInformations("1"))
  }



}
