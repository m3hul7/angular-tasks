import { Component, Directive, ElementRef, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-dir-pipe',
  templateUrl: './dir-pipe.component.html',
  styleUrls: ['./dir-pipe.component.css']
})
export class DirPipeComponent implements OnInit {

  currencycode:string = '';
  booleanVar:boolean = false;

  todayDate = new Date();

  constructor() { }


  onClick(recInputVal:string) {
    this.currencycode = recInputVal.toUpperCase();
  }
   hundOfData = [
    {
      index: 0,
      name: "Jill Banks",
      age: 23,
      eyeColor: "blue",
      email: "jillbanks@chorizon.com",
      balance: 2231.40,
      gender: "female",
      company: "ISOPLEX",
      phone: "+1 (875) 476-2343",
      address: "572 Ross Street, Dixonville, Massachusetts, 2973"
    },
    {
      index: 1,
      name: "Carla Frost",
      age: 36,
      eyeColor: "green",
      email: "carlafrost@isoplex.com",
      balance: 2669.91,
      currencycode: "USD",
      gender:  "female",
      company: "CRUSTATIA",
      phone: "+1 (946) 422-3919",
      address: "955 Interborough Parkway, Holtville, New Hampshire, 9684"
    },
    {
      index: 2,
      name: "Ethel Hammond",
      age: 37,
      eyeColor: "blue",
      email: "ethelhammond@crustatia.com",
      balance: 3183.13,
      gender:  "female",
      company: "VERTIDE",
      phone: "+1 (848) 442-2337",
      address: "318 Kent Street, Tyhee, Wyoming, 7759"
    },
    {
      index: 3,
      name: "Christa Savage",
      age: 35,
      eyeColor: "green",
      email: "christasavage@vertide.com",
      balance: 1732.34,
      gender:  "female",
      company: "ANIMALIA",
      phone: "+1 (955) 441-2578",
      address: "300 Rutledge Street, Haena, Palau, 6910"
    },
    {
      index: 4,
      name: "Morales Morgan",
      age: 33,
      eyeColor: "blue",
      email: "moralesmorgan@animalia.com",
      balance: 2135.41,
      gender:  "male",
      company: "SLAMBDA",
      phone: "+1 (854) 555-2027",
      address: "528 Granite Street, Whitehaven, Maine, 3255"
    },
    {
      index: 5,
      name: "Crane Hutchinson",
      age: 28,
      eyeColor: "brown",
      email: "cranehutchinson@slambda.com",
      balance: 2045.46,
      gender:  "male",
      company: "PYRAMIA",
      phone: "+1 (814) 425-2925",
      address: "674 Schenectady Avenue, Lafferty, Georgia, 8142"
    },
    {
      index: 6,
      name: "Mcmillan Garcia",
      age: 20,
      eyeColor: "green",
      email: "mcmillangarcia@pyramia.com",
      balance: 1606.34,
      gender:  "male",
      company: "AQUASURE",
      phone: "+1 (919) 468-2056",
      address: "257 Logan Street, Strong, Marshall Islands, 9576"
    },
    {
      index: 7,
      name: "Gwen Lindsey",
      age: 38,
      eyeColor: "green",
      email: "gwenlindsey@aquasure.com",
      balance: 1130.27,
      gender:  "female",
      company: "ROBOID",
      phone: "+1 (913) 411-2774",
      address: "412 John Street, Veguita, Rhode Island, 8617"
    }
  ]                                                        

  ngOnInit(): void {
  }
}
