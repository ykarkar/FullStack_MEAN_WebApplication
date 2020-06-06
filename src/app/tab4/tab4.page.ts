import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExpressMongoService } from '../express-mongo.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  outMsg: any; pId: any; pdesc: any; pQty: any; pricePerUnit:any; rQty:any;
  outRec: any = [];
  //prodData: Product[] = product;
  constructor(private mongo: ExpressMongoService) {}

  deleteOne() {
    const params = { pID:this.pId };
    this.mongo.delete(params)
    .subscribe(data => {
    this.outMsg = 'Record deleted.';
    this.outRec = [];
    },
    (err: HttpErrorResponse) => {
    console.log(err.message);
    this.outMsg = err.message;
    });
    }

    updateOne() {
      const params = { pID: this.pId, 
        pDesc: this.pdesc,
        pqty: this.pQty,
         priceperunit:this.pricePerUnit,
        rqty:this.rQty  };
      this.mongo.update(params)
      .subscribe(data => {
       // this.outRec=data;
      this.outMsg = 'Record updated.';
    
      },
      (err: HttpErrorResponse) => {
      console.log(err.message);
      this.outMsg = err.message;
      });
      }

  ngOnInit() {
  }

}
