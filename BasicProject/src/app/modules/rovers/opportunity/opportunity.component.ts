import { Component, OnInit } from '@angular/core';
import { RoverPhotosResponseModel } from '../../models/RoverPhotosResponseModel';
import { RoverService } from '../../rovers-services/rover.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
allPhotosFromOpportunity:RoverPhotosResponseModel[] = [];
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
      .getAllPhotosFromOpportunity()
      .subscribe((data: RoverPhotosResponseModel[]) => {
        this.allPhotosFromOpportunity = data;
        var firstArray = Object.values(this.allPhotosFromOpportunity)[0];
        var secondArray = Object.values(firstArray);
        this.secondArray = secondArray;
      });
  }

}
