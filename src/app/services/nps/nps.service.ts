import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nps } from 'src/app/models/nps';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NpsService {

  constructor(private http: HttpClient) { }

  getNpsData() {
    return this.http.get<Nps>(`${environment.dataVizAPI}nps`)
  }
}
