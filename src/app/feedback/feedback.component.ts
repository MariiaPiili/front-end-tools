import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { Question } from '../models/question';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../courses.service';

@Component({
    selector: 'app-feedback',
    standalone: true,
    imports: [MatSliderModule, MatCardModule, CommonModule, FormsModule],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  title: string = 'Feedback';

  questions: Question[] = [];

  constructor(private coursesService: CoursesService) {}

  /*questions: Question[] = [
    new Question('Question 1', 'Ei vielä arvosteltu'),
    new Question('Question 2', 'Ei vielä arvosteltu'),
    new Question('Question 3', 'Ei vielä arvosteltu'),
  ];*/

  ngOnInit(): void {
    this.questions = this.coursesService.getQuestions();
  }

  onInputChange(event: any, question: Question) {
    const value = event.target.value;    
    if (value == 1) {
      question.questionAnswer = 'Huono';
    } else if (value == 2) {
      question.questionAnswer = 'OK';
    } else if (value == 3) {
      question.questionAnswer = 'Hyvä';
    } else if (value == 4) {
      question.questionAnswer = 'Erinomainen';
    }
  }
}
