import { Injectable } from '@angular/core';
import { Question } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private questions: Question[] = [
    new Question('Question 1', 'Ei vielä arvosteltu'),
    new Question('Question 2', 'Ei vielä arvosteltu'),
    new Question('Question 3', 'Ei vielä arvosteltu'),
  ];

  getQuestions(): Question[] {
    return this.questions;
  }
}
