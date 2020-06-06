import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExpressMongoService } from '../express-mongo.service';
import product from '../../assets/data/products.json';
import { Product } from '../product';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  outMsg: any; pId: any; pdesc: any; pQty: any; pricePerUnit:any; rQty:any;
  outRec: any = [];
  prodData: Product[] = product;
  constructor(private mongo: ExpressMongoService) {}

  insert() {
    const params = { pID: this.pId, pDesc: this.pdesc,
    pqty: this.pQty, priceperunit:this.pricePerUnit,
    rqty:this.rQty };
    this.mongo.insert(params)
    .subscribe(data => {
    this.outMsg = 'Record added.';
    this.outRec = [];
    },
    (err: HttpErrorResponse) => {
    console.log(err.message);
    this.outMsg = err.message;
    });
    }
}
