import {Component, OnInit, Output} from '@angular/core';
import {User} from "../../shared/interfaces";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  user!: User;
  countries: string[] = [ 'Ukraine', 'Poland', 'Spain', 'France', 'Germany', 'England'];
  carArray: any = [ 'Renault', 'Kia', 'Maseratti']
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>sessionStorage.getItem('user'));
  }


}
