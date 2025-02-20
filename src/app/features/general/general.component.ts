import { Component } from '@angular/core';
import { GeneralService } from './service/general.service';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {

  generalItems: any = [];

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.generalService.getNew().subscribe(data => {
      this.generalItems = data;
    })
  }
}
