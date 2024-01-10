import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataResponse } from "../models/responses";
import { User } from "../models/user";
import { UserForCreateDto } from "../dtos/user-for-create-dto";
import { UserForUpdateDto } from "../dtos/user-for-update-dto";
@Injectable({providedIn:'root'})
export class UserService{

    constructor(private httpClient:HttpClient){}

    getAll():Observable<DataResponse<User[]>>{
      return this.httpClient.get<DataResponse<User[]>>("http://api.bysalon.com.tr/users/get-all")
    }
    getUserById(id:number):Observable<DataResponse<User>>{
      return this.httpClient.get<DataResponse<User>>(`http://api.bysalon.com.tr/users/get-by-id/${id}`)
    }
    updateUser(updateUser:UserForUpdateDto):Observable<Response>{
      return this.httpClient.put<Response>("http://api.bysalon.com.tr/users/update",updateUser);
  }
    addUser(user:UserForCreateDto):Observable<DataResponse<UserForCreateDto>>{
      return this.httpClient.post<DataResponse<UserForCreateDto>>("http://api.bysalon.com.tr/users/create",user)
    }
    deleteUser(id:number):Observable<Response>{
    return this.httpClient.delete<Response>(`http://api.bysalon.com.tr/users/delete-by-id/${id}`)   }

}
