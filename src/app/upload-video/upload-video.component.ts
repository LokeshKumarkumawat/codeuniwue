import { VideoService } from './../video.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var initMetisMenu: any; // Declare the function so TypeScript knows it exists
declare var initLeftMenuCollapse: any;
declare var initActiveMenu: any;
declare var initComponents: any;
declare var Waves: any;
declare var $: any;

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {


  uploading = false;
  ifFileSelected = false

  constructor(private http: HttpClient, private videoService: VideoService, private router: Router) { }

  ngOnInit(): void {
    initMetisMenu();
    initLeftMenuCollapse();
    initActiveMenu();
    initComponents();
    this.initDropify();
    Waves.init();

  }



  initDropify() {


    $('.dropify').dropify({

      messages: {
        'default': 'Drag and drop a file here or click',
        'replace': 'Drag and drop or click to replace',
        'remove': 'Remove',
        'error': 'Ooops, something wrong appended.'
      },
      error: {
        'fileSize': 'The file size is too big (1M max).'
      }
    });

  }

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.ifFileSelected =true
    console.log(this.selectedFile);
  }


  uploadFile() {

    this.uploading = true;
    if (this.selectedFile) {
      this.videoService.uploadVideo(this.selectedFile).subscribe(data => {
        this.uploading = false;
        this.router.navigateByUrl("/save-video-details/" + data.videoId);
      })

    }
  }
}





