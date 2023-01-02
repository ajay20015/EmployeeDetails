import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UserDataType } from "../DataTypes/user-data-type";
import { EmpCurdServiseService } from "../emp-curd-servise.service";
import { AddDialogComponent } from "./add-dialog/add-dialog.component";
import { DeleteDialogComponent } from "./delete-dialog/delete-dialog.component";
import { EditDialogComponent } from "./edit-dialog/edit-dialog.component";
import { ViewDialogComponent } from "./view-dialog/view-dialog.component";

@Component({
  selector: "app-emp-home",
  templateUrl: "./emp-home.component.html",
  styleUrls: ["./emp-home.component.css"],
})
export class EmpHomeComponent implements OnInit, AfterViewInit {
  dataSource!: MatTableDataSource<UserDataType>;

  displayedColumns: string[] = [
    "id",
    "firstName",
    "lastName",
    "maidenName",
    "age",
    "gender",
    "email",
    "phone",
    "username",
    "password",
    "birthDate",
    "image",
    "bloodGroup",
    "height",
    "weight",
    "eyeColor",
    "color",
    "type",
    "domain",
    "ip",
    "address",
    "city",
    "lat",
    "lng",
    "postalCode",
    "state",
    "macAddress",
    "university",
    "cardExpire",
    "cardNumber",
    "cardType",
    "currency",
    "iban",
    "address1",
    "city1",
    "lat1",
    "lng1",
    "postalCode1",
    "state1",
    "department",
    "name",
    "title",
    "ein",
    "ssn",
    "userAgent",
    "operations",
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private CurdService: EmpCurdServiseService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.CurdService.GetEmployeesData().subscribe(
      (res) => (this.dataSource = new MatTableDataSource(Object.values(res)[0]))
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }, 2000);
  }

  ViewEmployee(id: number) {
    this.CurdService.GetEmployeeData(id).subscribe((res) =>
      this.dialog.open(ViewDialogComponent, {
        data: res,
        width: "70%",
        height: "90%",
      })
    );
  }

  AddEmployee() {
    this.dialog.open(AddDialogComponent, {
      width: "70%",
      height: "90%",
    });
  }

  EditEmployee(id: number) {
    this.CurdService.GetEmployeeData(id).subscribe((res) =>
      this.dialog.open(EditDialogComponent, {
        data: res,
        width: "70%",
      })
    );
  }

  DeleteEmployee(id: number) {
    this.dialog.open(DeleteDialogComponent, { data: id });
  }
}
