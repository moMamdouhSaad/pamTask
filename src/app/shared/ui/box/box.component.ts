import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'pam-box,[pamBox]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent implements OnInit {
  @Input() public title: string;
  constructor() {}

  ngOnInit(): void {}
}
