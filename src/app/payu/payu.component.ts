import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSecurityService } from '../services/user.security.service';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-payu',
  templateUrl: './payu.component.html',
  styleUrls: ['./payu.component.css']
})
export class PayuComponent implements OnInit {

  public payuform: any = {};
  disablePaymentButton: boolean = true;
  constructor(private http: HttpClient,public dictionary: DictionaryService, public userService: UserSecurityService) { }
  
  confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      productInfo: this.payuform.productinfo,
      amount: this.payuform.amount
    }
    return this.http.post<any>('http://localhost:8080/payment/paymentdetails', paymentPayload).subscribe(
      data => {
      console.log(data);
      this.payuform.txnid = data.txnId;
      this.payuform.surl = data.sUrl;
      this.payuform.furl = data.fUrl;
      this.payuform.key = data.key;
      this.payuform.hash = data.hash;
      this.payuform.txnid = data.txnId;
        this.disablePaymentButton = false;
    }, error1 => {
        console.log(error1);
      })
  }

  ngOnInit() {
  }


}
