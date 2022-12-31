import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { UserDataType } from "../../DataTypes/user-data-type";

@Component({
  selector: "app-view-dialog",
  templateUrl: "./view-dialog.component.html",
  styleUrls: ["./view-dialog.component.css"],
})
export class ViewDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public Details: UserDataType
  ) {}

  ngOnInit() {}
}
