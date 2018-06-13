import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../../services/crypto.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-registartion',
  templateUrl: './view-registartion.component.html',
  styleUrls: ['./view-registartion.component.css']
})
export class ViewRegistartionComponent implements OnInit {

  public cryptoReg;

  constructor(private cryptoService : CryptoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCryptoReg(this.route.snapshot.params.id)
  }

  getCryptoReg(id:number) {
    this.cryptoService.getUser(id).subscribe(
      data => {
        this.cryptoReg = data;
      },
      err => console.error(err),
      () => console.log('coins loaded')
    );
  }
}
