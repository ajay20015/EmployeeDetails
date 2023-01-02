import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { EmpCurdServiseService } from "../EmpDetails/emp-curd-servise.service";
import { PopupMessageComponent } from "../EmpDetails/emp-home/popup-message/popup-message.component";
import { EmployeeAuthenticationService } from "../employee-authentication.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  LoginData!: FormGroup;
  errors: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private LoginersData: EmployeeAuthenticationService,
    private curdservice: EmpCurdServiseService,
    private router: Router,
    private popupMsg: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.LoginData = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(data: any) {
    // console.log(data);

    // login with json server regiester datas
    this.LoginersData.LoginersEmployee().subscribe((res) => {
      const user = res.find((a: any) => {
        if (
          a.userName == data.value.userName &&
          a.password == data.value.password
        ) {
          return true;
        } else if (
          a.email == data.value.userName &&
          a.password == data.value.password
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (user) {
        this.errors = true;
        this.router.navigate(["emp-home"]);
        this.popupMsg.openFromComponent(PopupMessageComponent, {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 3000,
          data: "Login",
        });
      } else {
        this.errors = false;
      }
    });

    // login with dummy api datas
    this.curdservice.GetEmployeesData().subscribe((res: any) => {
      // console.log(res["users"]);

      const user = res["users"].find((a: any) => {
        if (
          a.username == data.value.userName &&
          a.password == data.value.password
        ) {
          return true;
        } else if (
          a.email == data.value.userName &&
          a.password == data.value.password
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (user) {
        this.errors = true;
        this.router.navigate(["emp-home"]);
        this.popupMsg.openFromComponent(PopupMessageComponent, {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 3000,
          data: "Login",
        });
      } else {
        this.errors = false;
      }
    });
  }
}
