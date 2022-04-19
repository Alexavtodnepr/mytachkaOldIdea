import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {AuthUser} from "../../../shared/interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  users: any;
  user: any;


  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    // this.user = this.auth.getText().subscribe(res => {
    //   console.log(res)
    // })
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/login'])
  }
  submit() {
    const user: AuthUser = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe((response)=>{
      console.log(response)
      this.form.reset();
      this.router.navigate(['/user'])
      console.log('access denied')
    })
  }
}
