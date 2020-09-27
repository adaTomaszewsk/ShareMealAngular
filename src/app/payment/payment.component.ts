import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import { TicketTransportModel } from './model/ticket-transport-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ticket } from '../entities';
import { PayuRequest } from './model/payu-request';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payuModel: PayuRequest;
  constructor(public flightSearchService: FlightSearchService, public dictionary: DictionaryService, private http: HttpClient) {
    this.payuModel = new PayuRequest();
   }
   disablePaymentButton: boolean = true;
  ngOnInit() {
    this.createPayment()
    
  }

  
  createPayment() {
    this.flightSearchService.addTickets();
    this.flightSearchService.makePlacesReserved();
    const singleTicket: Ticket = this.flightSearchService.tickets[0];
    const paymentModel: TicketTransportModel = {
      email: 'awozmol@gmail.com',
      phone: singleTicket.phonenumber.toString(),
      productInfo: '1',
      name: singleTicket.name,
      amount: singleTicket.ticketCost.toString()
    };

   
    return this.http.post<any>('http://localhost:8080/payment/paymentdetails', paymentModel).subscribe(
      (data) => {
      console.log(data);
      this.payuModel.txnid = data.txnId;
      this.payuModel.surl = data.sUrl;
      this.payuModel.furl = data.fUrl;
      this.payuModel.key = data.key;
      this.payuModel.hash = data.hash;
      this.executePayuRequest(paymentModel);
      this.disablePaymentButton = false;
 //     this.flightSearchService.clearArrays();
    }, error1 => {
        console.log(error1);
      });
  }

  private executePayuRequest(paymentModel: TicketTransportModel) {
    this.payuModel.firstname = paymentModel.name;
    this.payuModel.productinfo = paymentModel.productInfo;
    this.payuModel.amount = paymentModel.amount;
    this.payuModel.email = paymentModel.email;
    this.payuModel.phone = paymentModel.phone;
/*
    let response: any;

    let headers= new Headers({'Content-Type':'application/json'});
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache'
    })

    let options = {headers: httpHeaders}

    return this.http.post<any>('https://test.payu.in/_payment', JSON.stringify(this.payuModel),options).subscribe(result => {
      response = result;
      console.log(result);
      // OPEN URL HERE OR STH
    });
  }
  */
}
}
