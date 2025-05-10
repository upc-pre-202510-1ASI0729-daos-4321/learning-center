import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Course {
  id: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {
  private http = inject(HttpClient);
  // This service can now make HTTP requests via `this.http`.

  constructor() { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`https://lcapi2.free.beeceptor.com/api/courses`);
  }

}
