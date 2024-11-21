import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class FinnkinoService {
  private newsApiUrl = 'https://www.finnkino.fi/xml/News'; 

  constructor(private http: HttpClient) {}
  
  getNews(): Observable<any> {
    return this.http.get(this.newsApiUrl, { responseType: 'text' }).pipe(
      map((response) => {
        let parsedData: any;
        
        xml2js.parseString(response, { explicitArray: false }, (err, result) => {
          if (err) {
            console.error('Parsing mistake:', err);
            throw new Error('Parsing failed');
          }
          parsedData = result;
        });

        
        if (!parsedData) {
          throw new Error('Data parsing ended with an error');
        }
        return parsedData;
      }),
      catchError((error) => {
        
        console.error('Error in receiving news:', error);
        return throwError(() => new Error('Failed to get the news'));
      })
    );
  }
}




