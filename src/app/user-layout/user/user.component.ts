import {Component, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {FbdataService} from "../../shared/services/fbdata.service";
import {Observable} from "rxjs";
import {User} from "../../shared/interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private auth: AuthService, private fbdata: FbdataService, private router: Router) { }
  private userUID: any;
  withoutData: boolean = false;
  $user!: User;
  ngOnInit(): void {
    this.userUID = sessionStorage.getItem('fb-userUID');
    this.fbdata.getById(this.userUID).subscribe(el=>{
      if(el.email){
        this.$user = el;
        console.log(this.$user);
        sessionStorage.setItem('user', JSON.stringify(this.$user));
      }else{
        this.withoutData = true;
      }

    });
  }

  exit(){
    this.auth.logout();
  }

  saveChanges() {
    const changesUser: any = JSON.parse(<string>sessionStorage.getItem('user'));

    console.log(changesUser);
  }

  createData() {
    const user = sessionStorage.getItem('user');
    if (user != null) {
      this.fbdata.create(JSON.parse(user)).subscribe(res =>{
        console.log(res)
      })
      this.withoutData = false;
    }
  }
}
