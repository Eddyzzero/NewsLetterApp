import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent implements OnInit {
  newsItems: any[] = [];
  
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNew().subscribe(data => {
      this.newsItems = data;
    });
  }
}
