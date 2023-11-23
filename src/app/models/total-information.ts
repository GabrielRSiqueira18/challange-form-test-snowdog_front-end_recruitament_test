import { CardInformation } from "./card-information"
import { ClientInformation } from "./client-information"
import { PurchaseDetails } from "./purchase-details"

export interface TotalInformation {
  id: string
  personalInformations: ClientInformation

  cardInformations: CardInformation

  purchaseDetails: PurchaseDetails[]
}
