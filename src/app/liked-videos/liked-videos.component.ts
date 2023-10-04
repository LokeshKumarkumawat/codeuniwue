import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-liked-videos',
  templateUrl: './liked-videos.component.html',
  styleUrls: ['./liked-videos.component.css']
})
export class LikedVideosComponent implements OnInit{

  myvideoslikes: Array<VideoDto> = [];

  constructor(private videoService: VideoService) {

  }

  ngOnInit(): void {
    this.videoService.getMyliked().subscribe(response => {
      this.myvideoslikes = response;
      console.log("Liked",response);

    })

  }

}
