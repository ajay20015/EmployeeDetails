import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css'],
})
export class PopupDialogComponent {
  constructor(
    private dialogRef: DialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public Message: string
  ) {}
}
