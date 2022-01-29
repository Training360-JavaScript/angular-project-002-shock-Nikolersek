import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';
  users: User[];
  currentUser: User = new User();
  constructor(private service: UserService) {
    this.users = service.list;
  }

  onSelectClick(dataRow: User): void {
    this.currentUser = dataRow;
  }

  onUpdateClick(dataRow: User): void {
    this.service.updateUser(dataRow);
  }

  onDeleteClick(dataRow: User): void {
    this.service.removeUser(dataRow);
  }
}
