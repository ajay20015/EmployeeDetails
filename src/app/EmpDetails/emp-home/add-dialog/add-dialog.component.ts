import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EmpCurdServiseService } from "../../emp-curd-servise.service";
import { PopupMessageComponent } from "../popup-message/popup-message.component";

@Component({
  selector: "app-add-dialog",
  templateUrl: "./add-dialog.component.html",
  styleUrls: ["./add-dialog.component.css"],
})
export class AddDialogComponent implements OnInit {
  EmployeeDatas!: FormGroup;

  constructor(
    public DialogRef: MatDialogRef<AddDialogComponent>,
    private employeeData: FormBuilder,
    private curdService: EmpCurdServiseService,
    private popupMsg: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.EmployeeDatas = this.employeeData.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      maidenName: ["", [Validators.required]],
      age: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      birthDate: ["", [Validators.required]],
      bloodGroup: ["", [Validators.required]],
      height: ["", [Validators.required]],
      weight: ["", [Validators.required]],
      eyeColor: ["", [Validators.required]],
      image: ["https://robohash.org/hicveldicta.png", [Validators.required]],
      domain: ["", [Validators.required]],
      ip: ["", [Validators.required]],
      hair: this.employeeData.group({
        color: ["", Validators.required],
        type: ["", Validators.required],
      }),
      address: this.employeeData.group({
        address: ["", Validators.required],
        city: ["", Validators.required],
        postalCode: ["", Validators.required],
        state: ["", Validators.required],
        coordinates: this.employeeData.group({
          lat: ["", Validators.required],
          lng: ["", Validators.required],
        }),
      }),
      macAddress: ["", [Validators.required]],
      university: ["", Validators.required],
      bank: this.employeeData.group({
        cardExpire: ["", [Validators.required]],
        cardNumber: ["", [Validators.required]],
        cardType: ["", [Validators.required]],
        currency: ["", [Validators.required]],
        iban: ["", [Validators.required]],
      }),
      company: this.employeeData.group({
        address: this.employeeData.group({
          address: ["", [Validators.required]],
          city: ["", [Validators.required]],
          coordinates: this.employeeData.group({
            lat: ["", [Validators.required]],
            lng: ["", [Validators.required]],
          }),
          postalCode: ["", [Validators.required]],
          state: ["", [Validators.required]],
        }),
        department: ["", [Validators.required]],
        name: ["", [Validators.required]],
        title: ["", [Validators.required]],
      }),
      ein: ["", [Validators.required]],
      ssn: ["", [Validators.required]],
      userAgent: ["", [Validators.required]],
    });
    console.log(this.EmployeeDatas);
  }

  onSubmit() {
    if (this.EmployeeDatas.status === "VALID") {
      this.curdService
        .PostEmployeeData(this.EmployeeDatas.value)
        .subscribe((res) => console.log(res));
      this.popupMsg.openFromComponent(PopupMessageComponent, {
        horizontalPosition: "center",
        verticalPosition: "top",
        duration: 3000,
        data: "Created",
      });
      this.EmployeeDatas.reset();
      this.DialogRef.close();
    } else {
      alert("All Fields are Required..!");
    }
  }
}
