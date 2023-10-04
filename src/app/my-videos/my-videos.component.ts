import { Component, OnInit } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-my-videos',
  templateUrl: './my-videos.component.html',
  styleUrls: ['./my-videos.component.css']
})
export class MyVideosComponent implements OnInit {
  myvideos: Array<VideoDto> = [];

  constructor(private videoService: VideoService) {

  }

  ngOnInit(): void {
    this.videoService.getMyVideos().subscribe(response => {
      this.myvideos = response;
    })

  }
}
