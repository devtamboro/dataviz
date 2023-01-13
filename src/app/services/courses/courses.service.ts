import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Courses } from 'src/app/models/courses';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCoursesData() {
    return this.http.get<Courses>(`${environment.dataVizAPI}courses`)
  }
}
