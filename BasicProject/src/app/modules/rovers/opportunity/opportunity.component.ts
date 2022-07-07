import { Component, OnInit } from '@angular/core';
import { RoverPhotosResponseModel } from '../../models/RoverPhotosResponseModel';
import { RoverService } from '../../rovers-services/rover.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css'],
})
export class OpportunityComponent implements OnInit {
  allPhotosFromOpportunity: RoverPhotosResponseModel[] = [];
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
  isLoading = false;
  totalLength: number = this.secondArray.length;
  page: number = 1;
  displayedColumns: string[] = [
    'id',
    'sol',
    'earth_date',
    'camera.full_name',
    'img_src',
  ];

  constructor(public roverService: RoverService) {}

  getAllPhotosFromOpportunity() {
    this.roverService
      .getAllPhotosFromOpportunity()
      .subscribe((data: RoverPhotosResponseModel[]) => {
        this.allPhotosFromOpportunity = data;
        var firstArray = Object.values(this.allPhotosFromOpportunity)[0];
        var secondArray = Object.values(firstArray);
        this.secondArray = secondArray;
        this.totalLength = secondArray.length;
      });
  }

  ngOnInit(): void {
    this.getAllPhotosFromOpportunity();
  }
}
