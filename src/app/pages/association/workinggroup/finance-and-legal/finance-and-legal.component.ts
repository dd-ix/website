import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "../../../../core/card/card.component";

@Component({
  selector: 'app-finance-and-legal',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './finance-and-legal.component.html',
  styleUrls: ['./finance-and-legal.component.scss']
})
export class FinanceAndLegalComponent {

}
