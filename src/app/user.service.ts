import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { UserDao } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userId: string = '';

  constructor(private httpClient: HttpClient) {
  }


  registerUser()  {
    this.httpClient.get("http://3.84.84.60:8080/api/user/register", {responseType: "text"})
      .subscribe(data => {
        this.userId = data;
      })
  }


  getUserData() : Observable<UserDao> {
    return this.httpClient.get<UserDao>("http://3.84.84.60:8080/api/user/user-data");
  }

  getUserId(): string {
    this.httpClient.get("http://3.84.84.60:8080/api/user/register", {responseType: "text"})
    .subscribe(data => {
      this.userId = data;
    })
    return this.userId;
  }

  subscribeToUser(videoUserId: string): Observable<boolean> {
    return this.httpClient.post<boolean>("http://3.84.84.60:8080/api/user/" + videoUserId + "/subscribe", null);
  }


  unSubscribeUser(videoUserId: string): Observable<boolean> {
    return this.httpClient.post<boolean>("http://3.84.84.60:8080/api/user/" + videoUserId + "/unSubscribe",  null);
  }

  checkSubscribe(videoUserId: string): Observable<boolean> {
    return this.httpClient.post<boolean>("http://3.84.84.60:8080/api/user/" + videoUserId + "/checkSubscribe",  null);
  }


  userDataByVideoUserId(videoUserId: string): any {
    return this.httpClient.post("http://3.84.84.60:8080/api/user/" + videoUserId + "/userDataByVideoUserId",  null);
  }


}
