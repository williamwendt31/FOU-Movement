import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonationFormComponent } from '../donation-form/donation-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDonationClick(): void {
    const dialogRef = this.dialog.open(DonationFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Successfully Closed Dialog');
    });
  }
}
