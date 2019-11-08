import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.sass']
})
export class AppointmentViewComponent implements OnInit {
  public doctor: Observable<any>
  public doctorId: string
  constructor(private doctorservice: DoctorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id')
    this.doctor = this.doctorservice.getDoctorDetails(this.doctorId).valueChanges() 
  }

}
