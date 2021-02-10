import { Injectable } from '@angular/core';
import { IQuestion } from './../shared/question';
import { of, Observable } from 'rxjs';


const data = [
  {
    id: 1,
    question: 'What is the objective of dependency injection?',
    options: [
        'Pass the service to the client.' ,
        'Allow the client to find service.' ,
        'Allow the client to build service.' ,
        'Give the client part service.'
    ],
    answer: 0,
  },
  {
    id: 2,
    question: 'Which of the following benefit from dependency injection?',
    options: [
      'Programming' ,
      'Testability' ,
      'Software design' ,
      'All of the above.'
    ],
    answer: 3,
  },
  {
    id: 3,
    question: 'Which of the following is the first step in setting up dependency injection?',
    options: [
      'Require in the component.' ,
      'Provide in the module.' ,
      'Mark dependency as @Injectable().' ,
      'Declare an object.'
    ],
    answer: 2,
  },
  {
    id: 4,
    question: 'In which of the following does dependency injection occur?',
    options: [
      '@Injectable()',
      'constructor',
      'function',
      'NgModule'
    ],
    answer: 1,
  }
]

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getAll():Observable<IQuestion[]>{
    return of(data);
  }

  getById(id:number):Observable<IQuestion>{
    return of(data.find((question) => question.id === id));
  }
}
