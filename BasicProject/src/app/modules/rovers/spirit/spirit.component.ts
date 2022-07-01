import { Component, OnInit } from '@angular/core';
import { RoverPhotosResponseModel } from '../../models/RoverPhotosResponseModel';
import { RoverService } from '../../rovers-services/rover.service';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.css']
})
export class SpiritComponent implements OnInit {
allPhotosFromSpirit: RoverPhotosResponseModel[] = [];
firstArray: RoverPhotosResponseModel[][]=[
  [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];
secondArray: RoverPhotosResponseModel[] = [];

  constructor(public roverService: RoverService) { }

  ngOnInit(): void {
    this.roverService
    .getAllPhotosFromSpirit()
    .subscribe((data: RoverPhotosResponseModel[]) => {
      this.allPhotosFromSpirit = data;      
      var firstArray = Object.values(this.allPhotosFromSpirit)[0];
      var secondArray = Object.values(firstArray);
      this.secondArray = secondArray;
    });
  }

}
