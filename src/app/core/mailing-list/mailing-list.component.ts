import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {CardComponent} from "../card/card.component";
import {CommonModule} from "@angular/common";
import {MailingListService} from "../../api/mailing-list.service";

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent
  ],
  standalone: true
})
export class MailingListComponent {

  protected form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  @Input()
  public mailingList: number | null = null;

  constructor(
    private mailingListService: MailingListService,
  ) {
  }

  protected submit(): void {
    if (!Number.isFinite(this.mailingList)) {
      throw new Error("Mailing list not defined");
    }

    if (!this.form.valid) {
      return;
    }

    const value = this.form.value;

    this.mailingListService.subscribe(this.mailingList!, value.name!, value.email!)
      .subscribe();
  }
}
