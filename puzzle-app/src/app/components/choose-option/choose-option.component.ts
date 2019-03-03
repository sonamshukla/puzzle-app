import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
  styleUrls: ['./choose-option.component.scss']
})
export class ChooseOptionComponent implements OnInit {
  @Input() questions;
  @Input() currentQusIndex;
  resultData;
  selctedOption;
  options = ['A', 'B', 'C', 'D']
  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultData = this.questions.slice();
  }
  chooseOption(answer){
    this.selctedOption = answer;
    this.resultData[this.currentQusIndex].studentAnswer = answer;
    this.resultService.setResults(this.resultData);
  }
}
