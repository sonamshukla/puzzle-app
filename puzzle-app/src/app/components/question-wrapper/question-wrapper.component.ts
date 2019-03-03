import { Component, OnInit, ElementRef, AfterContentInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-question-wrapper',
  templateUrl: './question-wrapper.component.html',
  styleUrls: ['./question-wrapper.component.scss']
})
export class QuestionWrapperComponent implements OnInit, AfterViewInit{
  @ViewChildren('questions') ques:ElementRef;
  questions: any = [];
  counter = 0;
  questionWrapperElem;
  qusestionContainerWidth;
  questionElem;
  constructor( private questionService: QuestionService, private _elementRef : ElementRef, private resultService: ResultService) { }

  ngOnInit() {
    this.getQuestions();
    
  }
  ngAfterViewInit() {
   setTimeout(() => {
     this.questionWrapperElem = this._elementRef.nativeElement.querySelector(`.qus-container`);
     this.questionElem = document.getElementsByClassName('question');
     this.qusestionContainerWidth = this.questionElem[0].clientWidth;
     this.questionWrapperElem.style.transform = `translateX(${(-this.qusestionContainerWidth*this.counter)}px)`;
   }, 500) 
  }
  getQuestions(){
    this.questionService.fetchQuestionList()
    .then(data => {
        this.questions = data;
        this.resultService.setResults(this.questions);
        console.log(this.questions);
        
    })
  }
  nextClick(){
    this.questionWrapperElem.style.transition = 'transform 0.4s ease-out';
    this.counter ++;
    this.questionWrapperElem.style.transform = `translateX(${(-this.qusestionContainerWidth*this.counter)}px)`;
  }
  prevClick(){
    this.questionWrapperElem.style.transition = 'transform 0.4s ease-out';
    this.counter --;
    this.questionWrapperElem.style.transform = `translateX(${(-this.qusestionContainerWidth*this.counter)}px)`;
  }
}
