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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})
export class SignupComponent implements OnInit {

  loading: boolean;
  loadingText: string;
  signUpForm: FormGroup;
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
      this.signUpForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
          phone: ['', Validators.required],
          first_name: ['', Validators.required],
          last_name: ['', Validators.required],
      });
      this.validateForm = this.fb.group({
        code: ['', Validators.required]
    });

    this.changePhoneForm = this.fb.group({
      newPhone: ['', Validators.required]
    }) 
  }

  signUp() {
      if (this.signUpForm.valid) {
          this.loading = true;
          this.loadingText = 'Sigining in...';
          this.auth.signUp(this.signUpForm.value.first_name, this.signUpForm.value.phone, this.signUpForm.value.email, this.signUpForm.value.last_name, this.signUpForm.value.password).subscribe(
            (res: loginResponse) => {
              console.log(res);
              if (res.status === 200) {
                this.router.navigateByUrl('/pages/profile');
                // this.validationId = res.id_verif_phone;
                this.sended = true;
              } else {
                this.modal.openSmall('error');
              }
            }
          );
          
      } 
    }
  // signUp() {
  //     if (this.signUpForm.valid) {
  //         this.loading = true;
  //         this.loadingText = 'Sigining in...';
  //         const res = this.auth.signUp();
  //         this.validationId = res.id_verif_phone;
  //         this.store.setUser(res);
  //         this.sended = true;
  //           }   
  //     } 
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
