import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { userService } from '../../../shared/services/user.service';
import { user } from '../../../shared/models/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { modalService } from '../../../shared/services/modal.service';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { apiUrls } from '../../../shared/services/api-url';
import { LocalStoreService } from "../../../shared/services/local-store.service";



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  // @Input() navItems: any;
  @Input() public title: string;
	formMode: FormGroup;
  formActividad: FormGroup;
	formUser: FormGroup;


  public uploader: FileUploader;
	public mode: string = "Personal";
  public icon_mode: string = "fa-user-circle";
  user: user;
  validEdit: boolean;
  loading: boolean;
  loadingText: string;


  @ViewChild('btnClose') btnClose;
  constructor( private userService: userService, private modal: modalService,
    private fb: FormBuilder, private store: LocalStoreService) { }
  ngOnInit() {
    this.validEdit = false;
    this.user = <user>{};
    this.userService.getUser()
    .subscribe(res => {
      if (res.status === 200) {
        this.user = res.data;
      } else {

      }
    });
    this.uploader = new FileUploader({
      url: apiUrls.upload,
      headers: [{
        name:'Authorization', value: 'Bearer ' + this.store.getItem('token')
      }],
      autoUpload: true
      });

    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;
    });
    this.formUser = this.fb.group({
      about: ['', Validators.required],
      company: ['', Validators.required],
      job: ['', Validators.required]
    });

    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

  }

  public saveMode() {
    this.mode = this.formMode.value['type_mode'];
    if(this.mode == "Work")
      this.icon_mode = "fa-briefcase";

    if(this.mode == "Community")
      this.icon_mode = "fa-users";

    if(this.mode == "Education")
      this.icon_mode = "fa-book";

    if(this.mode == "Personal")
      this.icon_mode = "fa-user-circle";

    if(this.mode == "Social")
      this.icon_mode = "fa-share-alt";
  }



  public saveActividad() {
  }

  changeEdit(){
  	this.validEdit = true;
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    let data = JSON.parse(response); //success server response
  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    let error = JSON.parse(response); //error server response
  }

  updateUser(){
    if (this.formUser.valid) {
      this.loading = true;
      this.loadingText = 'Updating....';
      this.userService.updateUser(this.formUser.value)
          .subscribe((res) => {
              if (res.status === 200) {
                this.validEdit = false;
              } else {
                  alert("error updating user");
                  this.loading = false;
              }
          });
        }
  }
}
