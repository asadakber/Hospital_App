import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {
  lat: string = '';
  lng: string = ''

  constructor(private mapservice: MapService) { }

  ngOnInit() {
    // this.mapservice.getLocation()
  }

}
