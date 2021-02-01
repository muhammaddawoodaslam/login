import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Injectable({
  providedIn: "root"
})
export class modalService {
    
    confirmResut;
    constructor(private modalService: NgbModal) {
    }
    
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
        .result.then((result) => {
          console.log(result);
        }, (reason) => {
          console.log('Err!', reason);
        });
      }
    openSmall(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
    .result.then((result) => {
        console.log(result);
    }, (reason) => {
        console.log('Err!', reason);
    });
    }

    confirm(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
        this.confirmResut = `Closed with: ${result}`;
    }, (reason) => {
        this.confirmResut = `Dismissed with: ${reason}`;
    });
    }

    openSmAlert(content) {
      this.modalService.open(content, { size: 'sm' });
    }

    dismmiss () {
      this.modalService.dismissAll();
    }
  

}
