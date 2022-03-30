import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About2Component } from './about2/about2.component';
import { Participants2Component } from './participants2/participants2.component';
import { TranslateRequest3Component } from './translate-request3/translate-request3.component';


const routes: Routes = [
  {path: 'translate3', component: TranslateRequest3Component},
  {path: "",redirectTo: "translate3", pathMatch: "full"},
  
  {path: 'participants2', component: Participants2Component},

  {path: 'about2', component: About2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
