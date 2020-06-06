import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExpressMongoService } from '../express-mongo.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  outMsg: any; pId: any; pdesc: any;
   pQty: any; pricePerUnit:any;
    rQty:any;
  outRec: any = [];
  constructor(private mongo: ExpressMongoService) {}
  retrieve() {
    const params = { pID: this.pId };
    this.mongo.retrieve(params)
    .subscribe(data => {
    this.outRec = data;
    this.outMsg = this.outRec.length + ' records retrieved';
    },
    (err: HttpErrorResponse) => {
    console.log(err.message);
    this.outMsg = err.message;
    });
    }

    retrieveall() {
      const params = { pID: "" };
      this.mongo.retrieve(params)
      .subscribe(data => {
      this.outRec = data;
      this.outMsg = this.outRec.length + ' records retrieved';
      },
      (err: HttpErrorResponse) => {
      console.log(err.message);
      this.outMsg = err.message;
      });
      }

    
 
}
