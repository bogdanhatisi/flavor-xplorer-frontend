import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PostDetailService} from "../../services/post-detail-service/post-detail.service";
import {postComment} from "../../models/postComment.interface";
import {Post} from "../../models/post.interface";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  post: Post;

  constructor(
    private dialogRef: MatDialogRef<PostDetailComponent>,
    private postDetailService: PostDetailService,
    @Inject(MAT_DIALOG_DATA) public data: { post: Post } // Inject the data here
  ) {
    this.post = data.post; // Access the post data
  }
  comments: postComment[] = []; // Assuming you have a Comment interface or class
  itemsPerPage: number = 5; // Adjust the number of comments per page as needed
  currentPage: number = 1;

  get pagedComments(): postComment[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.comments.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.comments.length / this.itemsPerPage);
  }

  loadNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  loadPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  ngOnInit(): void {
    // Assuming you are passing the post ID through some mechanism
    const postId = this.post.id/* Get the post ID from wherever you get it */;


    // Fetch comments
    this.postDetailService.getAllPostComments(postId).then((comments) => {
      this.comments = comments;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

