import { Component, OnInit } from '@angular/core';
import { EntertainmentService } from './service/entertainment.service';

@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.scss'
})
export class EntertainmentComponent implements OnInit {
  intertainmentItems: any = [];

  constructor( private entertainmentService: EntertainmentService) {}

  ngOnInit(): void {
    this.entertainmentService.getNew().subscribe(data => {
      this.intertainmentItems = data;
    })
  }
}
