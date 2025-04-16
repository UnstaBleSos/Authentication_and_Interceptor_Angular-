import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
    userInfo:any
    constructor (private userData:UserService){}

   ngOnInit():void{
      this.userData.fetchData(2).subscribe(
       { next: (res) => {
          this.userInfo = res;
          console.log(this.userInfo);
        },
        error: (err) => {
          console.error('Error fetching user data', err);
        },
        complete: () => {
          console.log('Data fetching completed');
        }}
      )
   }

}
