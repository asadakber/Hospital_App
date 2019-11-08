import { Injectable } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
@Injectable({
  providedIn: 'root'
})
export class GetService {
  doctorList = []
  constructor(private doctorservice: DoctorService) { }

  getDoctor() {
    this.doctorservice.getDoctor().subscribe(
      list => {
        this.doctorList = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
      }
    )
  }
}
