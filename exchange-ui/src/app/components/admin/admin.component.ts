import { Component, OnInit } from '@angular/core';
import { CryptoService } from "../../services/crypto.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public cryptos;
  constructor(private cryptoService: CryptoService ) { }

  ngOnInit() {
    this.getCryptos();
  }

  getCryptos(){
    this.cryptoService.getCryptos().subscribe(
data => {this.cryptos=data},
err=> console.error(err),
() => console.log('cryptocoins loaded')
    );
  }

}
