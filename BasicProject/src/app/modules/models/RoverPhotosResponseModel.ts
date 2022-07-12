export class RoverPhotosResponseModel {
  constructor(
  public id: number,
  public sol: number,
  public camera: {
    id: number, name: string, rover_id: number, full_name: string
  },
  public img_src: string,
  public earth_date: Date,
  public rover: {
    id: number,
    name: string,
    landing_date: Date,
    launch_date: Date,
    status: string
  }
  ){}
}
/*
1 Sol is a martian solar day, one full rotation of Mars from the 
perspective of the Sun. 
Approximately 88775.24409 seconds or 
24 hours, 39 minutes, 35.24409 seconds;
 slightly variable due to orbital eccentricity. 
 1 sol = 88775.24409 s.
*/