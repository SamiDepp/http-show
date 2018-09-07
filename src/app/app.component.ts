import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post';
import { map } from 'rxjs/operators';
import { ErrService} from './err.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _posts: Array<Post>;
  _post = {};
  _error;
  @ViewChild('modal') _myModal: any;

  constructor(private _http: HttpClient, private _service: ErrService) { }

  ngOnInit() {
    /*     return this._http.get<any>('http://jsonplaceholder.typicode.com/posts').subscribe(
          res => {
            this._posts = res;
          }
        ); */
        this._service.getPosts()
        .subscribe( response => { this._posts = response;  },
                    error => { this._error = error; }
                  );

/*     return this._http.get<Array<Post>>('http://jsonplaceholder.typicode.com/posts')
        .pipe(map(
          response => {
            const postsArray: Array<Post> = new Array<Post>();
            for (const responseItem of response) {
              const post = new Post(responseItem['id'], responseItem['title'], responseItem['body']);
              postsArray.push(post);
            }
            return postsArray;
          }
        ))
        .subscribe(
          response => this._posts = response
        ); */
  }

showPost(postId: number) {
  this._http.get<any>(`http://jsonplaceholder.typicode.com/posts/${postId}`).subscribe(
    res => {
      this._post = res;
      this._myModal.nativeElement.style.display = 'block';
    }
  );
}
closeModal() {
  this._myModal.nativeElement.style.display = 'none';
}
}
