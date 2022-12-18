/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { Map } from './Map';
import { User } from './User';

const user = new User();
const company = new Company();
const map = new Map('map');

map.addMarker(user);
map.addMarker(company);
