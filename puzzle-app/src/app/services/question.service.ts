import { Injectable } from '@angular/core';
import { API_CONSTS } from '../config/app.config';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpServices: HttpService) { }
  fetchQuestionList() {
    return this.httpServices.getRequest(API_CONSTS.QUESTIONS).toPromise();
  }
}
