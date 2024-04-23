import {Component, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "@shared/components/breadcrumb/breadcrumb.component";
import {PaginatorComponent} from "@shared/components/paginator/paginator.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {User} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";
import {TitleCasePipe} from "@angular/common";
import {MatAnchor, MatButton, MatMiniFabAnchor} from "@angular/material/button";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    PaginatorComponent,
    RouterLink,
    TitleCasePipe,
    MatButton,
    MatAnchor,
    MatMiniFabAnchor
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  user? : User ;

  constructor(private usersService: UsersService ,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((parameters) => {
      const id = parameters['id'] as string;
      console.log(id)
      this.usersService.getUserDetails(id).subscribe((user) => {
        this.user = user
        console.log(user)
      })
    })
  }
}
