import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, ReactiveFormsModule} from '@angular/forms'
import { SubscribeButtonService } from '../../api/subscribe-button.service';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-subscribe-button',
  templateUrl: './subscribe-button.component.html',
  styleUrls: ['./subscribe-button.component.scss'],
  imports: [
    ReactiveFormsModule,
    CardComponent
  ],
  standalone: true
})
export class SubscribeButtonComponent implements OnInit {
  form_data: FormGroup<any>;
  constructor(private builder: FormBuilder, private service: SubscribeButtonService) {
    this.form_data = this.builder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {}

  onSubmit(form_data: any) {
    console.log(form_data)
    this.service.SubscribeUser(form_data)
      .subscribe((response: any) => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, (error: { responseText: any; }) => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  protected readonly FormGroup = FormGroup;
}
