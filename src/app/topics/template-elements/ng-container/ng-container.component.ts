import { Component, OnInit } from '@angular/core';

interface IUser{
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  ip_address: string
}
@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users: IUser[] = [{
    "id": 1,
    "first_name": "Grenville",
    "last_name": "Connold",
    "email": "gconnold0@vinaora.com",
    "gender": "Male",
    "ip_address": "11.73.231.129"
  }, {
    "id": 2,
    "first_name": "Marwin",
    "last_name": "Salery",
    "email": "msalery1@ehow.com",
    "gender": "Male",
    "ip_address": "198.12.170.35"
  }, {
    "id": 3,
    "first_name": "Trisha",
    "last_name": "Paul",
    "email": "tpaul2@dell.com",
    "gender": "Female",
    "ip_address": "69.198.214.97"
  }, {
    "id": 4,
    "first_name": "Ainslee",
    "last_name": "Behling",
    "email": "abehling3@cam.ac.uk",
    "gender": "Female",
    "ip_address": "121.163.141.127"
  }, {
    "id": 5,
    "first_name": "Aurore",
    "last_name": "Kalderon",
    "email": "akalderon4@google.co.uk",
    "gender": "Female",
    "ip_address": "246.167.78.51"
  }, {
    "id": 6,
    "first_name": "Anette",
    "last_name": "Slide",
    "email": "aslide5@independent.co.uk",
    "gender": "Female",
    "ip_address": "13.126.238.178"
  }, {
    "id": 7,
    "first_name": "Virgina",
    "last_name": "Holton",
    "email": "vholton6@tripadvisor.com",
    "gender": "Female",
    "ip_address": "143.8.202.94"
  }, {
    "id": 8,
    "first_name": "Katti",
    "last_name": "Grivori",
    "email": "kgrivori7@arstechnica.com",
    "gender": "Genderqueer",
    "ip_address": "122.136.234.173"
  }, {
    "id": 9,
    "first_name": "Lorilyn",
    "last_name": "Lohden",
    "email": "llohden8@ft.com",
    "gender": "Female",
    "ip_address": "23.77.229.22"
  }, {
    "id": 10,
    "first_name": "Octavia",
    "last_name": "Schober",
    "email": "oschober9@illinois.edu",
    "gender": "Female",
    "ip_address": "43.198.43.139"
  }]

}
