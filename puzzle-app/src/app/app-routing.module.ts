import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionWrapperComponent } from './components/question-wrapper/question-wrapper.component';
import { ResultComponent} from './components/result/result.component';
const routes: Routes = [
  { path: 'questions', component: QuestionWrapperComponent },
  { path: 'result',      component: ResultComponent },
  { path: '',
    redirectTo: '/questions',
    pathMatch: 'full'
  },
  { path: '**', component: QuestionWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
