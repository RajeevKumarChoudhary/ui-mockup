import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBillComponent } from '../new-bill/new-bill.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date;
  interval;
  checked = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.setDate();
    this.interval = setInterval(() => {
      this.setDate();
    }, 1000);
  }
  setDate() {
    this.date = Date.now();
  }

  addBill() {
    this.dialog.open(NewBillComponent, {
      width: "600px", height: "650px"
    })
  }

}
