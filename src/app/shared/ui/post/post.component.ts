import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Post } from '../../utils/interfaces';

@Component({
  selector: 'pam-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  constructor() {}
  @Input() public type: string;
  @Input() public data: Post;

  ngOnInit(): void {}
}
