import { Injectable } from '@angular/core';
import { TotalInformation } from '../models/total-information';
import { ClientInformation } from '../models/client-information';
import { CardInformation } from '../models/card-information';

@Injectable({
  providedIn: 'root'
})
export class ClientInformationsService {


  private clientInformations: TotalInformation[] = []

  constructor() {}

  public addClientInformation(newClientPersonalInformations: ClientInformation, newClientPersonalCard: CardInformation) {
    const newClient: TotalInformation = {
      id: "1",
      personalInformations: newClientPersonalInformations,
      cardInformations: newClientPersonalCard,
      purchaseDetails: [
        {
          name: "Apple Watch Sport",
          value: 580,
        },
        {
          name: "Total Modern Buckle",
          value: 380,
        }
      ]
    }

    this.clientInformations.push(newClient)
  }

  public getClientsInformations(id: string) {
    return this.clientInformations.find(info => info.id == id)
  }
}
