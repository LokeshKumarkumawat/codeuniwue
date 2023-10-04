import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Component, ElementRef, OnInit, AfterViewInit ,ViewChild } from '@angular/core';
import {FormControl, FormGroup ,FormBuilder, Validators} from "@angular/forms";
import { VideoService } from '../video.service';
import {ActivatedRoute} from "@angular/router";
import { VideoDto } from '../video-dto';
import { HttpHeaders } from '@angular/common/http';

declare var initMetisMenu: any; // Declare the function so TypeScript knows it exists
declare var initLeftMenuCollapse: any;
declare var initActiveMenu: any;
declare var initComponents: any;
declare var Waves: any;
declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrls: ['./save-video-details.component.css']
})
export class SaveVideoDetailsComponent implements OnInit {

  saveVideoDetailsForm: FormGroup;
  // tagForm: FormGroup;

  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  videoStatus: FormControl = new FormControl('');
  selectable = true;
  removable = true;
  addOnBlur = true;

  tags: string[] = [];
  newTag: string = '';
  selectedFile!: File;
  selectedFileName = '';
  videoId = '';
  fileSelected = false;
  videoUrl!: string;
  uploading = false;
  thumbnailUrl!: string;
  tokenn=''
  userSub=''
  userId!: string;
  userName!: string;
  ifFileSelected = false





  constructor(private fb: FormBuilder,private activatedRoute: ActivatedRoute, private videoService: VideoService,private oidcSecurityService:OidcSecurityService) {
    this.videoId = this.activatedRoute.snapshot.params['videoId'];
    this.videoService.getVideo(this.videoId).subscribe(data => {
      this.videoUrl = data.videoUrl;
      this.thumbnailUrl = data.thumbnailUrl;
      this.userSub = data.userSub;
      this.userId = data.userId;
      console.log("UUUUSERID",data);

    })





    // this.saveVideoDetailsForm = new FormGroup({
    //   title: this.title,
    //   description: this.description,
    //   videoStatus: this.videoStatus,


    // })
    this.saveVideoDetailsForm = this.fb.group({
      title: this.title,
      description: this.description,
      videoStatus: this.videoStatus,
      newTag: ['', Validators.required],
    });

  }



  ngOnInit(): void {
    initMetisMenu();
    initLeftMenuCollapse();
    initActiveMenu();
    initComponents();
    this.initDropify();
    Waves.init();



    this.oidcSecurityService.checkAuth().subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        // Access tokens and ID tokens can be retrieved as follows
        const idToken = this.oidcSecurityService.getIdToken();
        const accessToken = this.oidcSecurityService.getAccessToken();

        // Use the tokens as needed
        console.log('ID Token:', idToken);
        console.log('Access Token:', accessToken);
        console.log('this.oooo',this.oidcSecurityService);

      } else {
        // User is not authenticated; you may want to redirect them to the login page
        // or display an error message.
        console.log("ERRORRR");

      }
    });
  }





  //ADD

  addTag() {
    const newTag = this.saveVideoDetailsForm.get('newTag')?.value?.trim();
    if (newTag !== undefined && newTag !== null && newTag !== '') {
      this.tags.push(newTag);
      this.saveVideoDetailsForm.get('newTag')?.reset(); // Reset the input field
    }
  }

  removeTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index !== -1) {
      this.tags.splice(index, 1);
    }
  }
  //REMOVE

  onSelectionChange(){

  }


  initDropify() {
    $('.autonumber').autoNumeric('init');

//Bootstrap-MaxLength
$('input#defaultconfig').maxlength({
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});


// Max Length
$('input#thresholdconfig').maxlength({
  threshold: 20,
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});

$('input#alloptions').maxlength({
  alwaysShow: true,
  separator: ' out of ',
  preText: 'You typed ',
  postText: ' chars available.',
  validate: true,
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});

$('textarea#textarea').maxlength({
  alwaysShow: true,
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});

$('input#placement').maxlength({
  alwaysShow: true,
  placement: 'top-left',
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});


// // Switchery
// $('[data-toggle="switchery"]').each(function (idx, obj) {
//   new Switchery($(this)[0], $(this).data());
// });


// Select2
$('[data-toggle="select2"]').select2();


// Touchspin
var defaultOptions = {};
// $('[data-toggle="touchspin"]').each(function (idx, obj) {
//     var objOptions = $.extend({}, defaultOptions, $(obj).data());
//     $(obj).TouchSpin(objOptions);
// });


// Color Picker

$('#basic-colorpicker').colorpicker();

$('#hexa-colorpicker').colorpicker({
    format: 'auto'
});

$('#component-colorpicker').colorpicker({
    format: null
});

$('#horizontal-colorpicker').colorpicker({
    horizontal: true
});

$('#inline-colorpicker').colorpicker({
    color: '#DD0F20',
    inline: true,
    container: true
});

// Date Range Picker
// this.defaultOptions = {
//   "cancelClass": "btn-light",
//   "applyButtonClasses": "btn-success"
// };

// date pickers
// $('[data-toggle="daterangepicker"]').each(function (idx, obj) {
//   var objOptions = $.extend({}, defaultOptions, $(obj).data());
//   $(obj).daterangepicker(objOptions);
// });

var start = moment().subtract(29, 'days');
var end = moment();
var defaultRangeOptions = {
    startDate: start,
    endDate: end,
    ranges: {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
};

// $('[data-toggle="date-picker-range"]').each(function (idx, obj) {
//     var objOptions = $.extend({}, defaultRangeOptions, $(obj).data());
//     var target = objOptions["targetDisplay"];
//     //rendering
//     $(obj).daterangepicker(objOptions, function(start, end) {
//         if (target)
//             $(target).html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
//     });
// });


  }


  onFileSelected(event: Event) {
    // @ts-ignore
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.fileSelected = true;
    this.ifFileSelected = true
  }

  onUpload() {
    this.uploading = true;
    this.videoService.uploadThumbnail(this.selectedFile, this.videoId)
      .subscribe((data) => {
        // this.matSnackBar.open("Thumbnail Upload Successful", "OK");
        this.uploading = false;
        console.log("DDTAA",data);

        this.thumbnailUrl =data


      })
  }


  saveVideo() {
    // Call the video service to make a http call to our backend


    // console.log("VIDEO ID",this.videoId);
    // console.log("VIDEO title",this.saveVideoDetailsForm.get('title')?.value);
    // console.log("VIDEO description",this.saveVideoDetailsForm.get('description')?.value);
    // console.log("VIDEO tags",this.tags);


    // console.log("VIDEO videoStatus",this.saveVideoDetailsForm.get('videoStatus')?.value);
    // console.log("VIDEO videoUrl",this.videoUrl);
    console.log("VIDEO thumbnailUrl",this.thumbnailUrl);


    const videoMetaData: VideoDto = {
      "id": this.videoId,
      "title": this.saveVideoDetailsForm.get('title')?.value,
      "description": this.saveVideoDetailsForm.get('description')?.value,
      "userSub":this.userSub,
      "userId":this.userId,
      "userName":this.userName,
      "tags": this.tags,
      "videoStatus": this.saveVideoDetailsForm.get('videoStatus')?.value,
      "videoUrl": this.videoUrl,
      "thumbnailUrl": this.thumbnailUrl,
      "likeCount": 0,
      "dislikeCount": 0,
      "viewCount": 0
    }
    this.videoService.saveVideo(videoMetaData).subscribe(data => {
      // this.matSnackBar.open("Video Metadata Updated successfully", "OK");
      console.log("Video Metadata Updated successfully");

    })
  }

}
