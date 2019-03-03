import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { ResultService } from '../../services/result.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  results: any = [];
  constructor(private questionService: QuestionService, private resultService: ResultService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getResults();
  }
  getQuestions(){
    this.questionService.fetchQuestionList()
    .then(data => {
        this.results = this.resultService.resultData;
    })
  }
  getResults(){
    this.results = this.resultService.getResults();
  }

}
