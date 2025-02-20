import { Component } from '@angular/core';
import { SportsService } from './service/sports.service';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.scss'
})
export class SportsComponent {
  sportsItems: any = [];

  constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
    this.sportsService.getNew().subscribe(data => {
      this.sportsItems = data;
    })
  }
}
