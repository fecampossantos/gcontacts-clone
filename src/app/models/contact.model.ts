import { Marker } from "./marker.model";

export interface Contact{
    id: string;
    name: string;
    avatar: string;
    number: string;
    email: string;
    _from_account: string;
    markers: string[];
}