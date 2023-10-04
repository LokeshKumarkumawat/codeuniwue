import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentDto } from '../comment-dto';
import { UserService } from '../user.service';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  videoId: string = '';
  commentsForm: FormGroup;
  commentsDto: CommentDto[] = [];

  username =''

  constructor(private userService: UserService, private commentService: CommentsService,
              ) {
    this.commentsForm = new FormGroup({
      comment: new FormControl(''),

    });
  }


  ngOnInit(): void {
    this.getComments();
    console.log(this.userService.getUserId());

    this.userService.getUserData().subscribe(response => {
      this.username = response.firstName;

    })

  }

  postComment() {
    const comment = this.commentsForm.get('comment')?.value;
    console.log("COMMM",comment);


    const commentDto = {
      "commentText": comment,
      "authorId": this.username
    }

    this.commentService.postComment(commentDto, this.videoId).subscribe(() => {
      console.log("Comment Posted Successfully", "OK");

      this.commentsForm.get('comment')?.reset();
      this.getComments();
    })
  }

  getComments() {
    this.commentService.getAllComments(this.videoId).subscribe(data => {
      this.commentsDto = data;
      console.log("dataComment",data);

    });
  }
}
