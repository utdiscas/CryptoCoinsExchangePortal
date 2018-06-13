import { Component, OnInit } from '@angular/core';
import { CryptoService } from "../../services/crypto.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
//import { throw } from 'rxjs/';
//import 'rxjs/add/observable/throw'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coinTypes: string[] = [
'Bitcoin',
'Ripple',
'Etherum',
'Lisk',
'Litecoin',
'Neo',
  ];
  cryptoform: FormGroup;
  validMessage: string ='';
  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      coinType: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      amountOfCoins: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if (this.cryptoform.valid){
      this.validMessage="Your Crypto Exchange Request has been submitted. Thank you!";
      this.cryptoService.createCryptoUserRegistration(this.cryptoform.value).subscribe(
        data => {
          this.cryptoform.reset();
          return true;
        },
        // error => {
        //   return Observable.throwError(error); 
        // }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting";
    }
  }  
  
}
