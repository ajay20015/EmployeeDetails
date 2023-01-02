import { DialogRef } from "@angular/cdk/dialog";
import { identifierName } from "@angular/compiler";
import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { EmpCurdServiseService } from "../../emp-curd-servise.service";
import { PopupMessageComponent } from "../popup-message/popup-message.component";

@Component({
  selector: "app-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrls: ["./delete-dialog.component.css"],
})
export class DeleteDialogComponent {
  name!: string;
  constructor(
    public dialogRef: DialogRef<DeleteDialogComponent>,
    private CurdService: EmpCurdServiseService,
    @Inject(MAT_DIALOG_DATA) public Id: number,
    private popupMsg: MatSnackBar,
    private router: Router
  ) {
    // using reuse component delete and logout
    if (typeof Id == "string") {
      this.name = Id;
    } else {
      this.name = "Delete";
    }
  }
  logout() {
    this.router.navigate(["login"]);
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
