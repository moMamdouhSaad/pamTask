import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pam-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentFormComponent implements OnInit {
  public formGroup: FormGroup;
  @Output() public readonly saveComment = new EventEmitter<number>();

  public constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initCommentForm();
  }

  private initCommentForm(): void {
    this.formGroup = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      content: [null, Validators.required],
    });
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.saveComment.emit(this.formGroup.value);
      this.formGroup.reset();
    }
  }
}
