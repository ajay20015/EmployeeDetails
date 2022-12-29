import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpHomeComponent } from './EmpDetails/emp-home/emp-home.component';
import { ErrorComponent } from './EmpDetails/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'emp-home', pathMatch: 'full' },
  { path: 'emp-home', component: EmpHomeComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
