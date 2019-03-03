import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { OptionsComponent } from './components/options/options.component';
import { QuestionWrapperComponent } from './components/question-wrapper/question-wrapper.component';
import { ResultComponent } from './components/result/result.component';
import { ChooseOptionComponent } from './components/choose-option/choose-option.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertSnPipe } from './pipes/convert-sn.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    OptionsComponent,
    QuestionWrapperComponent,
    ResultComponent,
    ChooseOptionComponent,
    ConvertSnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
