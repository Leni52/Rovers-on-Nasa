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
