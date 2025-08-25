// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.html',
//   styleUrl: './user.css'
// })
// export class User implements OnInit {
//   userList:any[]=[];

//   userObj: any = {
    
//   "userId": 0,
//   "emailId": "",
//   "password": "",
//   "fullName": "",
//   "mobileNo": ""
// };


  
//   http = inject(HttpClient);

//   ngOnInit(): void {
//   this.getUsers();
  
//   }

//   getUsers(){
//     this.http.get("https://api.freeprojectapi.com/api/GoalTracker/register").subscribe((res:any) => {
//       this.userList =  res;
//     }) ;
//   }
// }
