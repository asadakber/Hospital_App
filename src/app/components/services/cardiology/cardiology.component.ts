import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrls: ['./cardiology.component.sass']
})
export class CardiologyComponent implements OnInit {
  items;
  constructor() { }

  ngOnInit() {
    this.initializeItem();
  }

  initializeItem() {
    this.items = [
      "Echocardiogram",
      "Echo Color Doppler",
      "Stress Test (TMT)",
      "Holter Monitor",
      "Electrophysiological Study(EPS) & Ablatio",
      "Electrocardiogram(ECG)",
      "MRI",
      "Chest x-ray",
      "Lab tests"
    ]
  }

}
