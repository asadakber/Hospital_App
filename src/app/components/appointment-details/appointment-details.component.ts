import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../modal/doctor';
import { NgForm } from '@angular/forms';
import { GetService } from '../../services/get.service';
@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.sass']
})
export class AppointmentDetailsComponent implements OnInit {
  searchText: string = ''
  constructor(private getservice: GetService,private doctorservice: DoctorService) { }

  ngOnInit() {
    // this.doctorservice.getDoctor().subscribe(
    //   list => {
    //     this.doctorList = list.map(item => {
    //       return {
    //         $key: item.key,
    //         ...item.payload.val()
    //       }
    //     })
    //   })
    this.getservice.getDoctor();
    this.doctorservice.doctorform.reset()
    this.doctorservice.initializeFormGroup()
  }

  onSubmit() {
   if(this.doctorservice.doctorform.valid) {
      if(this.doctorservice.doctorform.get('$key').value == null)
        this.doctorservice.AddDoctor(this.doctorservice.doctorform.value)
      else
        this.doctorservice.UpdateDoctor(this.doctorservice.doctorform.value)
        this.doctorservice.doctorform.reset()
        this.doctorservice.initializeFormGroup()
   }
  }

  onRemove($key) {
    this.doctorservice.DeleteDoctor($key)
  }

  filtercondition(doctor) {
    return doctor.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1
  }

 
}
