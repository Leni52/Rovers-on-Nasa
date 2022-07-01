import { Component, OnInit } from '@angular/core';

import { RoverPhotosResponseModel } from '../../models/RoverPhotosResponseModel';
import { RoverService } from '../../rovers-services/rover.service';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css'],
})
export class CuriosityComponent implements OnInit {
  allPhotosFromCuriosity: RoverPhotosResponseModel[] = [];
  firstArray: RoverPhotosResponseModel[][] = [
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

  constructor(public roverService: RoverService) {}

  ngOnInit(): void {
    this.roverService
      .getAllPhotosFromCuriosity()
      .subscribe((data: RoverPhotosResponseModel[]) => {
        this.allPhotosFromCuriosity = data;       
        var firstArray = Object.values(this.allPhotosFromCuriosity)[0];
        var secondArray = Object.values(firstArray);
        this.secondArray = secondArray;
      });
  }
}
