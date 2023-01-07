import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { Push } from 'src/app/models/push';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private http: HttpClient) { }

  getNotificationsData() {
    return this.http.get<Push>(`${environment.dataVizAPI}push`)
  }
}
