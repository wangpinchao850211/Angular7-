import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleQuestionnaireComponent } from './simpleQuestionnaire/simpleQuestionnaire.component';

const routes: Routes = [
    {
        path: '', component: SimpleQuestionnaireComponent,
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class QuestionnaireRouting { }
