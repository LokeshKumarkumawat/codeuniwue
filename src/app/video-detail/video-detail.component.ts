import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit{

  videoId!: string;
  videoUrl!: string;
  videoTitle!: string;
  videoDescription!: string;
  tags: Array<string> = [];
  videoAvailable: boolean = false;
  likeCount: number = 0;
  dislikeCount: number = 0;
  viewCount: number = 0;
  videoUserId!: string ;
  userName!: string ;

  showSubscribeButton: boolean = true;
  showUnSubscribeButton: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService,private userService: UserService) {
    this.videoId = this.activatedRoute.snapshot.params['videoId'];
    this.videoService.getVideo(this.videoId).subscribe(data => {

      console.log("DATA" ,data);

      this.videoUrl = data.videoUrl;
      this.videoTitle = data.title;
      this.videoDescription = data.description;
      this.tags = data.tags;
      this.videoAvailable = true;
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
      this.viewCount = data.viewCount;
      this.videoUserId = data.userId;
      this.userName = data.userName;

      this.checkSubscribe()
    })
  }

  ngOnInit(): void {
  }



  likeVideo() {
    this.videoService.likeVideo(this.videoId).subscribe(data => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  disLikeVideo() {
    this.videoService.disLikeVideo(this.videoId).subscribe(data => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  subscribeToUser() {
    // let userId = this.userService.getUserId();

    this.userService.subscribeToUser(this.videoUserId).subscribe(data => {

      console.log("SUBDATA",data);
      if(data == true){
         this.showUnSubscribeButton = true;
      this.showSubscribeButton = false;
      }


    })
  }

  checkSubscribe() {
    // let userId = this.userService.getUserId();

    this.userService.checkSubscribe(this.videoUserId).subscribe(data => {

      console.log("SUBDATA",data);
      if(data == true){
         this.showUnSubscribeButton = true;
      this.showSubscribeButton = false;
      }


    })
  }

  unSubscribeToUser() {
    // let userId = this.userService.getUserId();
    this.userService.unSubscribeUser(this.videoUserId).subscribe(data => {
      this.showUnSubscribeButton = false;
      this.showSubscribeButton = true;
    })
  }
}
