import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map, of} from "rxjs";
import {User} from "../interfaces/user.interface";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private cachedUsers: User[] = []; // Store the users list
  private usersLoaded: boolean = false; // check is if users have been loaded

  public constructor(private readonly http: HttpClient) {}
  public getUsers(page: number): Observable<User[]> {
    if (this.usersLoaded) {
      return of(this.cachedUsers);
    } else {
      return this.http.get<{ data: User[] }>(`https://reqres.in/api/users?page=${page}`)
        .pipe(
          map(response => {
            this.cachedUsers = response.data;
            this.usersLoaded = true;
            return response.data;
          }),
          catchError(error => {
            console.error('Error fetching users:', error);
            return of([]);
          })
        );
    }
  }
  public getUserDetails(id : string) : Observable<User> {
    return  this.http.get<{data : User}>(`https://reqres.in/api/users/${id}`).pipe(
      map(response => response.data)
    );
  }
}
