import { DialogRef } from "@angular/cdk/dialog";
import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EmpCurdServiseService } from "../../emp-curd-servise.service";
import { PopupMessageComponent } from "../popup-message/popup-message.component";

@Component({
  selector: "app-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrls: ["./delete-dialog.component.css"],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: DialogRef<DeleteDialogComponent>,
    private CurdService: EmpCurdServiseService,
    @Inject(MAT_DIALOG_DATA) public Id: number,
    private popupMsg: MatSnackBar
  ) {}

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
