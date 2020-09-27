import { DictionaryService } from './../services/dictionary.service';
import { HttpService } from './../services/http-service';
import { Ticket, Users, Flight } from './../entities';
import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { UserSecurityService } from '../services/user.security.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MessagingService } from '../services/messaging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-buying-form',
  templateUrl: './buying-form.component.html',
  styleUrls: ['./buying-form.component.css']
})
export class BuyingFormComponent implements OnInit {

  constructor(public flightSearchService: FlightSearchService,
    public userService: UserSecurityService, private http: HttpClient, public dictionary: DictionaryService,private messagingService: MessagingService) { }
    

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneNumberFormControl = new FormControl('', [
    Validators.required, Validators.minLength(9), Validators.maxLength(9)
  ]);

  peselFormControl = new FormControl('', [
    Validators.required, Validators.minLength(11), Validators.maxLength(11)
  ]);

  matcher = new ErrorStateMatcher();

  message;

  ngOnInit() {
    const userId = 'user001';
    this.messagingService.requestPermission(userId)
 /*   this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage*/
  }

  firebasepost(){
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  /*  const headers={'Content-Type':'application/json','Authorization':'key=AAAAuea1Yao:APA91bF9jJewf_g9Cc59kp1CzNGDVx75pgnlN25z8H6nk6QE8M6F8CiqTpcv4w2Fo3tLqEv-YGp6lIniY6Lj8KjS4ZrpKoaJkvGlrIBL7ZigO5xcDQWLCxjuPw_l2crHRtf56hr11fEJ'}
   //post data missing(here you pass email and password)
    const body= {
      "title": "Testing Notification!",
      "body": "Firebase is shit",
      "to": "cwAmU0wDG3BL4O9q3XMjOQ:APA91bF6pVlrWsf1B9HljVl0BDyC-8DmuHwACHnj_RnYnadxJEHvoc_kNGxRUBTe_-6AqFi6-fzOJqMEz5v7-K_t0tPSC88BeFoDeCe9gHPCg0vny2tZ_4y8RWkU5lkUz0BOL9qh6xna",
    }
    return this.http.post('https://fcm.googleapis.com/fcm/send',body,{headers})
        .subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        )
          }*/
}}
