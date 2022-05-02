import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {AuthUser, User} from "../../../shared/interfaces";
import {RegisterService} from "../../../shared/services/register.service";
import {FbdataService} from "../../../shared/services/fbdata.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  users: any;
  user: any;
  typeInput: boolean = true;


  constructor(public register: RegisterService,
              private router: Router,
              private fbdata: FbdataService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submit() {
    const user: AuthUser = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.register.register(user).subscribe((response)=>{
      if(response){
        this.form.reset();
        this.router.navigate(['/login']);
        console.log('You are registered');
        const User: User = response.localId;
        // console.log(User)
        // this.fbdata.create(JSON.stringify(User)).subscribe(res => {
        //   console.log(res)
        // });
      }
    })
  }

  back() {
    history.back();
  }
}
