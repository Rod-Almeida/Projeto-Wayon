import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  panelOpenState = false;
  userList: Array<any>;
  lat: number = -37.3159;
  lng: number = 81.1496;

  constructor(private userListService: UserListService) {}

  ngOnInit(): void {
    this.createList();
  }


    createList(){
    this.userListService.createList().subscribe((res: any) => {
      this.userList = res;
      console.log('lat ', this.userList[0].address.geo.lat);
      console.log('lng ', this.userList[0].address.geo.lng);
    });


  // createList(){
  //   this.userListService.createList().subscribe(res => this.userList = res);
  //   console.log('userList: ', this.userList)
  // }
  }
}
