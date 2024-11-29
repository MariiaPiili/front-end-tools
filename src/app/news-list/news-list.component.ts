import { Component, OnInit } from '@angular/core';
import { FinnkinoService } from '../services/finnkino.service';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { NewsFilterPipe } from '../pipes/news-filter.pipe';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-news-list',
    standalone: true,
    imports: [
        CommonModule,
        MatExpansionModule,
        HttpClientModule,
        NewsFilterPipe,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: any[] = [];
  searchTerm: string = '';

  constructor(private finnkinoService: FinnkinoService) {}

  ngOnInit(): void {
    this.finnkinoService.getNews().subscribe((data) => {
      if (data?.News?.NewsArticle) {
        this.news = Array.isArray(data.News.NewsArticle)
          ? data.News.NewsArticle
          : [data.News.NewsArticle];
      }
    });
  }
}
