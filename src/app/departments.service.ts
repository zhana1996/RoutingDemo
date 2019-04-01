import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './departments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private _url: string = "/assets/data/departments.json";

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this._url);
  }
}
