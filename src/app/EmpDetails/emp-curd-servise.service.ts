import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserDataType } from './DataTypes/user-data-type';

@Injectable({
  providedIn: 'root',
})
export class EmpCurdServiseService {
  private baseUrl: string = 'https://dummyjson.com/users/';
  constructor(private http: HttpClient) {}

  GetEmployeesData(): Observable<UserDataType[]> {
    return this.http.get<UserDataType[]>(this.baseUrl);
  }

  GetEmployeeData(id: number): Observable<UserDataType> {
    return this.http.get<UserDataType>(this.baseUrl + id);
  }

  PostEmployeeData(data: UserDataType): Observable<UserDataType> {
    return this.http.post<UserDataType>(this.baseUrl + 'add', data);
  }

  EditEmployee(data: UserDataType, id: any): Observable<UserDataType> {
    return this.http.put<UserDataType>(this.baseUrl + id, data);
  }

  DeleteEmployee(id: number): Observable<any> {
    console.log(id);

    return this.http.delete(this.baseUrl + id);
  }
}
