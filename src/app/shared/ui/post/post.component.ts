import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'pam-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  constructor() {}
  @Input() public type: string;
  @Input() public data: any; //Todo
  @ContentChild('mainPost') mainPostTmpl: TemplateRef<any>;
  @ContentChild('title') title: TemplateRef<any>;

  ngOnInit(): void {}
}
