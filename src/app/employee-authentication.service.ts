import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmpAuthDataType } from "./EmpDetails/DataTypes/empAuthDataType";

@Injectable({
  providedIn: "root",
})
export class EmployeeAuthenticationService {
  constructor(private http: HttpClient) {}

  RegisterEmployee(data: EmpAuthDataType) {
    data = { ...data, active: false };
    return this.http.post<EmpAuthDataType>(
      "http://localhost:3000/EmployeeLogin",
      data
    );
  }

  LoginersEmployee(): Observable<EmpAuthDataType[]> {
    return this.http.get<EmpAuthDataType[]>(
      "http://localhost:3000/EmployeeLogin"
    );
  }

  getSingleUserLoginData(id: number) {
    return this.http.get<EmpAuthDataType>(
      "http://localhost:3000/EmployeeLogin/" + id
    );
  }

  UpdateRegistration(data: EmpAuthDataType) {
    return this.http.patch<EmpAuthDataType>(
      "http://localhost:3000/EmployeeLogin/" + data.id,
      data
    );
  }
}
