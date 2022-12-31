import { Component, Inject } from "@angular/core";
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-popup-message",
  templateUrl: "./popup-message.component.html",
  styleUrls: ["./popup-message.component.css"],
})
export class PopupMessageComponent {
  constructor(
    private popupRef: MatSnackBarRef<PopupMessageComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public Message: string
  ) {}
}
