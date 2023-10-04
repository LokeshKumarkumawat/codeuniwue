import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { UserDao } from '../user-dto';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {


  myFollows: Array<UserDao> = [];
constructor(private videoService: VideoService) {

}

ngOnInit(): void  {

  this.videoService.getMyFollow().subscribe(response=> {
    this.myFollows = response;
    console.log("Respo",response);

  })



}

}



