import { Component } from '@angular/core';
import { ScienceService } from './service/science.service';

@Component({
  selector: 'app-science',
  standalone: true,
  imports: [],
  templateUrl: './science.component.html',
  styleUrl: './science.component.scss'
})
export class ScienceComponent {
  scienceItems: any[] = [];

  constructor(private scienceService: ScienceService) { }

  ngOnInit(): void {
    this.scienceService.getNew().subscribe(data => {
      this.scienceItems = data;
    })
  }
}
