import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleQuestionnaireComponent } from './simpleQuestionnaire/simpleQuestionnaire.component';
import { QuestionnaireRouting } from './simpleQuestionnaire.routing';
import { SectionsService } from './sections.service';
import { QuestionsService } from './question.service';

@NgModule({
  imports: [
    CommonModule,
    QuestionnaireRouting
  ],
  declarations: [SimpleQuestionnaireComponent],
  providers: [
    SectionsService,
    QuestionsService
  ]
})
export class SimpleQuestionnaireModule { }
