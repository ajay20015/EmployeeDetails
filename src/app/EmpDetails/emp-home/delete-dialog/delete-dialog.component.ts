import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpCurdServiseService } from '../../emp-curd-servise.service';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: DialogRef<DeleteDialogComponent>,
    private CurdService: EmpCurdServiseService,
    @Inject(MAT_DIALOG_DATA) public Id: number,
    private dialog: MatDialog
  ) {}

  delete() {
    this.CurdService.DeleteEmployee(this.Id).subscribe((res) =>
      console.log(res)
    );
    const dialogAutoClose = this.dialog.open(PopupDialogComponent, {
      data: ' Deleted ',
      width: '40%',
      position: { top: '0px' },
    });
    dialogAutoClose.afterOpened().subscribe((_) => {
      setTimeout(() => {
        dialogAutoClose.close();
      }, 2000);
    });
  }
}
