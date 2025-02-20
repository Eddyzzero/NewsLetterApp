import { Component } from '@angular/core';
import { HealthService } from './service/health.service';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [],
  templateUrl: './health.component.html',
  styleUrl: './health.component.scss'
})
export class HealthComponent {
  healthItems: any = [];

  constructor(private healthService: HealthService) { }

  ngOnInit(): void {
    this.healthService.getNew().subscribe(data => {
      this.healthItems = data;
    })
  }
}
