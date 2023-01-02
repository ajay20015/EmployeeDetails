import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmpHomeComponent } from "./EmpDetails/emp-home/emp-home.component";
import { ErrorComponent } from "./EmpDetails/error/error.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmpMaterialModuleModule } from "./EmpDetails/emp-material-module/emp-material-module.module";
import { HttpClientModule } from "@angular/common/http";
import { ViewDialogComponent } from "./EmpDetails/emp-home/view-dialog/view-dialog.component";
import { EditDialogComponent } from "./EmpDetails/emp-home/edit-dialog/edit-dialog.component";
import { AddDialogComponent } from "./EmpDetails/emp-home/add-dialog/add-dialog.component";
import { DeleteDialogComponent } from "./EmpDetails/emp-home/delete-dialog/delete-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EmpCurdServiseService } from "./EmpDetails/emp-curd-servise.service";
import { PopupMessageComponent } from "./EmpDetails/emp-home/popup-message/popup-message.component";
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpHomeComponent,
    ErrorComponent,
    ViewDialogComponent,
    EditDialogComponent,
    AddDialogComponent,
    DeleteDialogComponent,
    PopupMessageComponent,
    LoginPageComponent,
    SignUpPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmpMaterialModuleModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [EmpCurdServiseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
