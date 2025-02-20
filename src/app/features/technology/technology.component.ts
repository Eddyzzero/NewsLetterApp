import { Component } from '@angular/core';
import { TechnologyService } from './service/technology.service';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  technologyItems: any = [];

  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.technologyService.getNew().subscribe(data => {
      this.technologyItems = data;
    })
  }
}
