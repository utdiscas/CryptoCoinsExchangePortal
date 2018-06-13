import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable()
export class CryptoService {

  constructor(private http:HttpClient) { }


  getCryptos(){
    return this.http.get('/server/api/cryptos');
  }

  getUser(id: number){
return this.http.get('/server/api/cryptos/' + id);
  }

  createCryptoUserRegistration(crypto){
    let body = JSON.stringify(crypto);
return this.http.post('/server/api/cryptos', body, httpOptions);
  }
}
