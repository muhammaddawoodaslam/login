import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loginResponse } from '../../../shared/models/login-response.model';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { LocalStoreService } from 'src/app/shared/services/local-store.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})



  export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private store: LocalStoreService
    ) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard Module...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });

        this.signinForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    signin() {
        if (this.signinForm.valid) {
            this.loading = true;
            this.loadingText = 'Sigining in...';
            this.auth.signin(this.signinForm.value.email, this.signinForm.value.password)
                .subscribe((res: loginResponse) => {
                    if (res.status === 200) {
                        this.auth.authenticated = true;
                        this.store.setUser(res);
                        this.router.navigateByUrl('/pages/profile');
                        this.loading = false;
                    } else {
                        alert("error login cred");
                        this.loading = false;
                    }
                });
        }
       
    }

}
