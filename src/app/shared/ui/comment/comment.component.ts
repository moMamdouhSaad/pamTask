import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'pam-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
  @Input() public data: any;

  public constructor() {}

  public ngOnInit(): void {}
}
