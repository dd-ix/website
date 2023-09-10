import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {CardComponent} from "../card/card.component";
import {CommonModule} from "@angular/common";
import {MailingListService} from "../../api/mailing-list.service";
import {ButtonComponent, FormErrorComponent, TextFieldComponent} from "@feel/form";
import {IconSendComponent} from "../../icons/icon-send/icon-send.component";
import {IconNewsComponent} from "../../icons/icon-news/icon-news.component";

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent,
    TextFieldComponent,
    ButtonComponent,
    FormErrorComponent,
    IconSendComponent,
    IconNewsComponent,
  ],
  standalone: true
})
export class MailingListComponent {

  protected form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  @Input()
  public listName: string | null = null;

  @Input()
  public listId: number | null = null;

  constructor(
    private mailingListService: MailingListService,
  ) {
  }

  protected submit(): void {
    if (!Number.isFinite(this.listId)) {
      throw new Error("Mailing list not defined");
    }

    if (!this.form.valid) {
      return;
    }

    const value = this.form.value;

    this.mailingListService.subscribe(this.listId!, value.email!)
      .subscribe();
  }
}
