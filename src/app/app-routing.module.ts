import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpHomeComponent } from "./EmpDetails/emp-home/emp-home.component";
import { ErrorComponent } from "./EmpDetails/error/error.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", title: "Login", component: LoginPageComponent },
  { path: "signup", title: "SignUp", component: SignUpPageComponent },
  { path: "emp-home/:id", title: "HomePage", component: EmpHomeComponent },
  { path: "pageNotFound", title: "PageNotFound", component: ErrorComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
