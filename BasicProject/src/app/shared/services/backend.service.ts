import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  GETRequest(requestTarget: string, responseType: any= 'json'):Observable<any>{
    return this.http.get(
      requestTarget,{
        observe:'body',
        responseType: responseType
      }
    );
  }
}
