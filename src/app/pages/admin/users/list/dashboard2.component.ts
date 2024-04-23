import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import {PaginatorComponent} from "@shared/components/paginator/paginator.component";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user.interface";
import {Router, RouterLink} from "@angular/router";
import {NgIf, TitleCasePipe} from "@angular/common";
import {SearchService} from "../../services/search.service";
import {SpinnerComponent} from "@shared/components/spinner/spinner.component";

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatProgressBarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgScrollbar,
    PaginatorComponent,
    RouterLink,
    TitleCasePipe,
    SpinnerComponent,
    NgIf,
  ],
})
export class Dashboard2Component implements OnInit, AfterViewInit {

  public isLoading: boolean = true;
  public users: User[] = [];
  public currentPage: number = 1;
  public filteredUsers: User[] = [];

  constructor(private usersService: UsersService, private router : Router, private searchService: SearchService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  ngOnInit() {
    this.getAllUsers(this.currentPage);
    this.subscribeToSearchQuery();
  }

  private getAllUsers(page: number) {
    this.usersService.getUsers(page).subscribe(users => {
      this.users = users;
      this.filteredUsers = [...users];
    });
  }

  private subscribeToSearchQuery() {
    this.searchService.searchQuery$.subscribe(query => {
      this.filterUsers(query);
    });
  }

  private filterUsers(query: string) {
    if (!query) {
      this.filteredUsers = [...this.users];
    } else {
      // Filter users
      this.filteredUsers = this.users.filter(user => {
        return user.id.toString().includes(query);
      });
    }
  }

  public userDetails(id: string): void {
    this.router.navigate(['/admin/users', 'details', id]).then();
  }

}
