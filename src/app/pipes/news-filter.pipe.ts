import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter',
  standalone: true,
})
export class NewsFilterPipe implements PipeTransform {
  transform(news: any[], searchTerm: string): any[] {
    if (!news || !searchTerm) {
      return news;
    }
    searchTerm = searchTerm.toLowerCase();
    return news.filter(
      (item) =>
        item.Title.toLowerCase().includes(searchTerm) ||
        (item.HTMLLead && item.HTMLLead.toLowerCase().includes(searchTerm))
    );
  }
}
