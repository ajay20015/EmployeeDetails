import { DialogRef } from "@angular/cdk/dialog";
import { identifierName } from "@angular/compiler";
import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { EmployeeAuthenticationService } from "src/app/employee-authentication.service";
import { EmpAuthDataType } from "../../DataTypes/empAuthDataType";
import { EmpCurdServiseService } from "../../emp-curd-servise.service";
import { PopupMessageComponent } from "../popup-message/popup-message.component";

@Component({
  selector: "app-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrls: ["./delete-dialog.component.css"],
})
export class DeleteDialogComponent {
  name!: string;
  empData!: EmpAuthDataType;
  constructor(
    public dialogRef: DialogRef<DeleteDialogComponent>,
    private CurdService: EmpCurdServiseService,
    @Inject(MAT_DIALOG_DATA) public Id: number,
    private popupMsg: MatSnackBar,
    private router: Router,
    private empAuth: EmployeeAuthenticationService
  ) {
    // using reuse component delete and logout
    if (typeof Id == "number") {
      //delete condition
      this.name = "Delete";
    } else {
      //logout condition
      this.name = Id["message"];
      this.empData = Id["empData"];
    }
  }
  logout() {
    if (this.empData) {
      console.log(this.empData.active);
      this.empAuth
        .UpdateRegistration({ ...this.empData, active: false })
        .subscribe((res) => {
          this.router.navigate(["login"]);
          console.log(res);
        });
    } else {
      this.router.navigate(["login"]);
    }
  }
  delete() {
    this.CurdService.DeleteEmployee(this.Id).subscribe((res) =>
      console.log(res)
    );
    this.popupMsg.openFromComponent(PopupMessageComponent, {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 3000,
      data: "Deleted",
    });
  }
}
