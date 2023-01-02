import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EmployeeAuthenticationService {
  constructor(private http: HttpClient) {}

  RegisterEmployee(data: any) {
    return this.http.post<any>("http://localhost:3000/EmployeeLogin", data);
  }

  LoginersEmployee() {
    return this.http.get<any>("http://localhost:3000/EmployeeLogin");
  }
}
