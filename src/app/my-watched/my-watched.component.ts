import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-my-watched',
  templateUrl: './my-watched.component.html',
  styleUrls: ['./my-watched.component.css']
})
export class MyWatchedComponent implements OnInit{

  mywatches: Array<VideoDto> = [];

  constructor(private videoService: VideoService) {

  }

  ngOnInit(): void {
    this.videoService.getMyWatched().subscribe(response => {
      this.mywatches= response;
      console.log("WATCH",response);

    })

  }

}
