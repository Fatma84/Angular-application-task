import { Component } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    MatPaginator
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {

}
