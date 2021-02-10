import { Component, OnInit } from '@angular/core';
// we need import it becuse we need Question type
import { IQuestion } from '../shared/question';
// import { QUESTIONS } from './../shared/questions';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  // varible type of Question(inteface)
  // question: Question;
  questions: IQuestion[] = [];
  questionIndex: number = 0;
  page: number = 1;
  correctAnswers: number = 0;
  countdown: number = 0;
  countdownTime = 15;
  countdownTimer: any;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getAll().subscribe((questions) => {
      this.questions = questions;
    });
  }
  get question(): IQuestion {
    return this.questions[this.questionIndex];
  }

  get countdownText(): number {
    return this.countdown;
  }

  get progress(): number {
    return Math.floor((this.questionIndex / this.questions.length) * 100);
  }

  startQuiz(): void {
    this.countdown = this.countdownTime;
    this.questionIndex = 0;
    this.page = 2;

    this.countdownTimer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.nextQuestion();
      }
    }, 1000);
  }

  endQuiz(): void {
    clearInterval(this.countdownTimer);
    this.page = 3;
  }

  nextQuestion(): void {
    if (this.questions.length <= this.questionIndex + 1) {
      this.endQuiz();
      return;
    }
    this.countdown = this.countdownTime;
    this.questionIndex++;
  }

  selectOption(e: any): void {
    let index = Array.from(e.target.parentNode.children).indexOf(e.target);
    if (index === this.question.answer) {
      this.correctAnswers++;
    }
    this.nextQuestion();
  }
}
