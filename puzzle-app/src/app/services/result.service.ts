import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  resultData: any = []
  constructor() { }
  getResults(){
    return this.resultData;
  }
  setResults(value){
    this.resultData = value;
  }

}
