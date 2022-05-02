import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {AuthUser} from "../../../shared/interfaces";
import {FbdataService} from "../../../shared/services/fbdata.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  users: any;
  user: any;
  typeInput: boolean = true;

  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  logout(){
    this.auth.logout();
    history.back();
  }
  submit() {
    const user: AuthUser = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    sessionStorage.setItem('password', this.form.value.password);

    this.auth.login(user).subscribe((response)=>{
      this.form.reset();
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/user/userprofile']);
    });
  }
}
