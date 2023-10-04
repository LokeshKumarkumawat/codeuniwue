import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Injectable } from '@angular/core';

import { UploadVideoResponse } from './upload-video/UploadVideoResponse';
import { VideoDto } from './video-dto';
import { UserDao } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) {
  }

  uploadVideo(fileEntry: File): Observable<UploadVideoResponse> {

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name);

    // HTTP Post call to upload the video
    return this.http.post<UploadVideoResponse>("http://3.84.84.60:8080/api/videos", formData);
  }






  uploadThumbnail(fileEntry: File, videoId: string): Observable<string> {
    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name);
    formData.append('videoId', videoId);

    // HTTP Post call to upload the thumbnail
    return this.http.post("http://3.84.84.60:8080/api/videos/thumbnail", formData, {
      responseType: 'text'
    });
  }





  getVideo(videoId: string): Observable<VideoDto> {
    return this.http.get<VideoDto>("http://3.84.84.60:8080/api/videos/" + videoId);
  }



  saveVideo(videoMetaData: VideoDto): Observable<VideoDto> {
    return this.http.put<VideoDto>("http://3.84.84.60:8080/api/videos", videoMetaData);
  }


  getAllVideos(): Observable<Array<VideoDto>> {
    return this.http.get<Array<VideoDto>>("http://3.84.84.60:8080/api/videos");
  }


  // [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]

  getMyVideos(): Observable<Array<VideoDto>> {
    return this.http.get<Array<VideoDto>>("http://3.84.84.60:8080/api/user/my-videos");
  }

  getMyFollow(): Observable<Array<UserDao>> {
    return this.http.get<Array<UserDao>>("http://3.84.84.60:8080/api/user/my-follow");
  }

  getMyWatched(): Observable<Array<VideoDto>> {
    return this.http.get<Array<VideoDto>>("http://3.84.84.60:8080/api/user/my-watched");
  }


  getMyliked(): Observable<Array<VideoDto>> {
    return this.http.get<Array<VideoDto>>("http://3.84.84.60:8080/api/user/my-liked");
  }



  // getMyFollow(): any {
  //   return this.http.get("http://3.84.84.60:8080/api/user/my-follow");
  // }



  likeVideo(videoId: string): Observable<VideoDto> {
    return this.http.post<VideoDto>("http://3.84.84.60:8080/api/videos/" + videoId + "/like", null);
  }

  disLikeVideo(videoId: string): Observable<VideoDto> {
    return this.http.post<VideoDto>("http://3.84.84.60:8080/api/videos/" + videoId + "/disLike", null);
  }





}
