import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { PopupMessageComponent } from "../EmpDetails/emp-home/popup-message/popup-message.component";
import { EmployeeAuthenticationService } from "../employee-authentication.service";

@Component({
  selector: "app-sign-up-page",
  templateUrl: "./sign-up-page.component.html",
  styleUrls: ["./sign-up-page.component.css"],
})
export class SignUpPageComponent implements OnInit {
  LoginData!: FormGroup;
  errors: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private LoginersData: EmployeeAuthenticationService,
    private router: Router,
    private popupMsg: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.LoginData = this.formBuilder.group({
      userName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(data: any) {
    if (data.status === "VALID") {
      this.errors = true;
      this.LoginersData.RegisterEmployee(data.value).subscribe((res) => {
        this.router.navigate(["login"]);
        console.log(res);
      });
      this.popupMsg.openFromComponent(PopupMessageComponent, {
        horizontalPosition: "center",
        verticalPosition: "top",
        duration: 3000,
        data: "Register",
      });
    } else {
      this.errors = false;
    }
  }
}
