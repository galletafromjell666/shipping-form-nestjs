import { Parcel } from 'src/types/parcel.interface';
import { ShippingForm } from 'src/types/shippingForm.interface';

export interface Shipping extends ShippingForm {
  parcels: Parcel[];
}
