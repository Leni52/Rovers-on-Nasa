import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { RoverPhotosResponseModel } from '../../models/RoverPhotosResponseModel';
import { RoverService } from '../../rovers-services/rover.service';
import { MatTableDataSource } from '@angular/material/table';

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
 
  isLoading = false;
  totalLength: number = this.secondArray.length;
  page: number = 1;
  displayedColumns: string[] = ['rover.name','rover.status', 'sol', 'earth_date', 'camera.full_name', 'img_src'];
  
  constructor(public roverService: RoverService) {}
  
  getAllPhotosFromCuriosity() {
    this.roverService
      .getAllPhotosFromCuriosity()
      .subscribe((data: RoverPhotosResponseModel[]) => {
        this.allPhotosFromCuriosity = data;
        console.log(this.allPhotosFromCuriosity);
        var firstArray = Object.values(this.allPhotosFromCuriosity)[0];
        var secondArray = Object.values(firstArray);
        this.secondArray = secondArray;
        this.totalLength = secondArray.length;
      });
  }

  ngOnInit(): void {
    this.getAllPhotosFromCuriosity();
  }
}
