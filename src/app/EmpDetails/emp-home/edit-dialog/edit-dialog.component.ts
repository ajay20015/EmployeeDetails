import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDataType } from '../../DataTypes/user-data-type';
import { EmpCurdServiseService } from '../../emp-curd-servise.service';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent {
  EmployeeDatas!: FormGroup;

  constructor(
    private dialogRef: DialogRef<EditDialogComponent>,
    private employeeData: FormBuilder,
    private curdService: EmpCurdServiseService,
    @Inject(MAT_DIALOG_DATA) public EmployeeDetails: UserDataType,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.EmployeeDatas = this.employeeData.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      maidenName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      eyeColor: ['', [Validators.required]],
      image: ['https://robohash.org/hicveldicta.png', [Validators.required]],
      domain: ['', [Validators.required]],
      ip: ['', [Validators.required]],
      hair: this.employeeData.group({
        color: ['', Validators.required],
        type: ['', Validators.required],
      }),
      address: this.employeeData.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        state: ['', Validators.required],
        coordinates: this.employeeData.group({
          lat: ['', Validators.required],
          lng: ['', Validators.required],
        }),
      }),
      macAddress: ['', [Validators.required]],
      university: ['', Validators.required],
      bank: this.employeeData.group({
        cardExpire: ['', [Validators.required]],
        cardNumber: ['', [Validators.required]],
        cardType: ['', [Validators.required]],
        currency: ['', [Validators.required]],
        iban: ['', [Validators.required]],
      }),
      company: this.employeeData.group({
        address: this.employeeData.group({
          address: ['', [Validators.required]],
          city: ['', [Validators.required]],
          coordinates: this.employeeData.group({
            lat: ['', [Validators.required]],
            lng: ['', [Validators.required]],
          }),
          postalCode: ['', [Validators.required]],
          state: ['', [Validators.required]],
        }),
        department: ['', [Validators.required]],
        name: ['', [Validators.required]],
        title: ['', [Validators.required]],
      }),
      ein: ['', [Validators.required]],
      ssn: ['', [Validators.required]],
      userAgent: ['', [Validators.required]],
    });
    console.log(this.EmployeeDatas);

    this.EmployeeDatas.setValue({
      firstName: this.EmployeeDetails.firstName,
      lastName: this.EmployeeDetails.lastName,
      maidenName: this.EmployeeDetails.maidenName,
      age: this.EmployeeDetails.age,
      gender: this.EmployeeDetails.gender,
      email: this.EmployeeDetails.email,
      phone: this.EmployeeDetails.phone,
      username: this.EmployeeDetails.username,
      password: this.EmployeeDetails.password,
      birthDate: this.EmployeeDetails.birthDate,
      image: 'https://robohash.org/doloremquesintcorrupti.png',
      bloodGroup: this.EmployeeDetails.bloodGroup,
      height: this.EmployeeDetails.height,
      weight: this.EmployeeDetails.weight,
      eyeColor: this.EmployeeDetails.eyeColor,
      hair: {
        color: this.EmployeeDetails.hair.color,
        type: this.EmployeeDetails.hair.type,
      },
      domain: this.EmployeeDetails.domain,
      ip: this.EmployeeDetails.ip,
      address: {
        address: this.EmployeeDetails.address.address,
        city: this.EmployeeDetails.address.city,
        coordinates: {
          lat: this.EmployeeDetails.address.coordinates.lat,
          lng: this.EmployeeDetails.address.coordinates.lng,
        },
        postalCode: this.EmployeeDetails.address.postalCode,
        state: this.EmployeeDetails.address.state,
      },
      macAddress: this.EmployeeDetails.macAddress,
      university: this.EmployeeDetails.university,
      bank: {
        cardExpire: this.EmployeeDetails.bank.cardExpire,
        cardNumber: this.EmployeeDetails.bank.cardNumber,
        cardType: this.EmployeeDetails.bank.cardType,
        currency: this.EmployeeDetails.bank.currency,
        iban: this.EmployeeDetails.bank.iban,
      },
      company: {
        address: {
          address: this.EmployeeDetails.company.address.address,
          city: this.EmployeeDetails.company.address.city,
          coordinates: {
            lat: this.EmployeeDetails.company.address.coordinates.lat,
            lng: this.EmployeeDetails.company.address.coordinates.lng,
          },
          postalCode: this.EmployeeDetails.company.address.postalCode,
          state: this.EmployeeDetails.company.address.state,
        },
        department: this.EmployeeDetails.company.department,
        name: this.EmployeeDetails.company.name,
        title: this.EmployeeDetails.company.title,
      },
      ein: this.EmployeeDetails.ein,
      ssn: this.EmployeeDetails.ssn,
      userAgent: this.EmployeeDetails.userAgent,
    });
  }

  onSubmit() {
    console.log(this.EmployeeDetails);

    if (this.EmployeeDatas.status === 'VALID') {
      this.curdService
        .EditEmployee(this.EmployeeDatas.value, this.EmployeeDetails.id)
        .subscribe((res) => console.log(res));
      const dialogAutoClose = this.dialog.open(PopupDialogComponent, {
        data: ' Updated ',
        width: '40%',
        position: { top: '0px' },
      });
      dialogAutoClose.afterOpened().subscribe((_) => {
        setTimeout(() => {
          dialogAutoClose.close();
        }, 2000);
      });
    } else {
      alert('All Fields are Required..!');
    }
  }
}
