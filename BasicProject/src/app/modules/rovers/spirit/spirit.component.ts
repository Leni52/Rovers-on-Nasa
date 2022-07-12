import { Component, OnInit } from '@angular/core';
import { RoverPhotosResponseModel } from '../../models/RoverPhotosResponseModel';
import { RoverService } from '../../rovers-services/rover.service';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.css'],
})
export class SpiritComponent implements OnInit {
  allPhotosFromSpirit: RoverPhotosResponseModel[] = [];
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

  totalLength: number = this.secondArray.length;
  page: number = 1;
  displayedColumns: string[] = [
    'rover.name',
    'rover.status',
    'sol',
    'earth_date',
    'camera.full_name',
    'img_src',
  ];
 isLoading : boolean = false;
  constructor(public roverService: RoverService) {}

  getAllPhotosFromSpirit() {
    this.roverService
      .getAllPhotosFromSpirit()
      .subscribe((data: RoverPhotosResponseModel[]) => {
        this.allPhotosFromSpirit = data;
        var firstArray = Object.values(this.allPhotosFromSpirit)[0];
        var secondArray = Object.values(firstArray);
        this.secondArray = secondArray;
        this.totalLength = secondArray.length;
        setTimeout(()=>{
          this.isLoading=false;
        },1000)
      });
  }

  ngOnInit(): void {
    this.getAllPhotosFromSpirit();
    this.isLoading= true;
  }
}
