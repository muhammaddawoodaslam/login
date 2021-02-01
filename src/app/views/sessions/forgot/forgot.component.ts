import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loginResponse } from '../../../shared/models/login-response.model';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { LocalStoreService } from 'src/app/shared/services/local-store.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import {modalService} from 'src/app/shared/services/modal.service';
import { AlertService } from 'src/app/shared/_alert/alert.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [SharedAnimations]
})
export class ForgotComponent implements OnInit {

  loading: boolean;
  loadingText: string;
  resetPassForm: FormGroup;
  validateForm: FormGroup;
  changePhoneForm: FormGroup;
  sended: boolean;
  validationId: string;
  newPhone: boolean;
  constructor(
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router,
      private store: LocalStoreService,
      private modal: modalService,
      protected alertService: AlertService
  ) { }

  ngOnInit() {
      this.sended = false; 
      this.newPhone = false;
      this.resetPassForm = this.fb.group({
          email: ['', Validators.required]
      });
      this.validateForm = this.fb.group({
        code: ['', Validators.required]
    });

    this.changePhoneForm = this.fb.group({
      newPhone: ['', Validators.required]
    }) 
  }

  resetPass() {
      if (this.resetPassForm.valid) {
          this.loading = true;
          this.loadingText = 'Sigining in...';
          // let res = this.auth.signUp();
          // this.validationId = res.id_verif_phone;
          this.sended = true;
      } 
    }

    validateCode() {
        if (this.validateForm.valid) {
            this.auth.validatePhone(this.validateForm.value.code, this.validationId)
                .subscribe((res: loginResponse) => {
                    if (res.status === 200) {
                      this.router.navigateByUrl('/pages/profile');
                    } else {
                      this.modal.openSmall('error');
                    }
                });
        } 
    }

    sendNewPhone() {
      if (this.changePhoneForm.valid) {
          this.auth.newPhone(this.changePhoneForm.value.newPhone, this.validationId)
              .subscribe((res: loginResponse) => {
                  if (res.status === 200) {
                    console.log(res);
                  } else {
                    this.modal.openSmall('error');
                    this.loading = false;
                  }
              });
      } 
  }

  changePhone() {
    this.newPhone = true;
}

  reSend() {
    this.alertService.info("We sent your code again");
  }
}
