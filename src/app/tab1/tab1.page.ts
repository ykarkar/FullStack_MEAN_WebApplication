import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExpressMongoService } from '../express-mongo.service';
import product from '../../assets/data/products.json';
import { Product } from '../product';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  outMsg: any; pId: any; pdesc: any; pQty: any; pricePerUnit:any; rQty:any;
  outRec: any = [];
  prodData: Product[] = product;

  constructor(private mongo: ExpressMongoService) {}

  loadproducts(){
    this.outRec = this.prodData;
      }
  
      ngOnInit() {
        console.log(this.prodData.length);
        console.log(this.prodData);
        
      }
      

}

