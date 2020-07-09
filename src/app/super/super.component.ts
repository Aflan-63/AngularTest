import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.less'],
})
export class SuperComponent implements OnInit {
  loading = false;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.users = users;
      });
  }
}
