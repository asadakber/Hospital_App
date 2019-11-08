import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Doctor } from '../modal/doctor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  DoctorList: AngularFireList<any>
  doctorSelected: Doctor = new Doctor()
  constructor(private db: AngularFireDatabase,private afs: AngularFirestore) {
    this.DoctorList = this.db.list('doctor')
   }

   doctorform: FormGroup = new FormGroup({
     $key: new FormControl(null),
     name: new FormControl('', Validators.required),
     phone: new FormControl(0, Validators.required),
     service: new FormControl('', Validators.required),
     doctor: new FormControl('', Validators.required),
     date: new FormControl('', Validators.required),
     message: new FormControl('', Validators.required)
   })

   initializeFormGroup() {
     this.doctorform.setValue({
      $key: null,
      name: '',
      phone: 0,
      service: '',
      doctor: '',
      date: '',
      message: ''
     })
   }

   popularForm(doctor) {
     this.doctorform.setValue(doctor)
   }

   getDoctor() {
     return this.DoctorList.snapshotChanges()
   }

   AddDoctor(doctor) {
    this.DoctorList.push({
      name: doctor.name,
      phone: doctor.phone,
      service: doctor.service,
      doctor: doctor.doctor,
      date: doctor.date,
      message: doctor.message
    })
   }

   getDoctorDetails(doctorId: string): AngularFireObject<any> {
     return this.db.object(`/doctor/${doctorId}`)
   }

   UpdateDoctor(doctor) {
     this.DoctorList.update(doctor.$key, {
      name: doctor.name,
      phone: doctor.phone,
      service: doctor.service,
      doctor: doctor.doctor,
      date: doctor.date,
      message: doctor.message
     })
   }

   DeleteDoctor($key: string) {
    this.DoctorList.remove($key)
   }
}
