import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgeComponentComponent } from './imge-component/imge-component.component';

const routes: Routes = [ 
  {path: '**', component: ImgeComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
