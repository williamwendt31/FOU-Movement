import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationFormComponent } from './donation-form/donation-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DonationFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Successfully Closed Dialog');
    });
  }
}
