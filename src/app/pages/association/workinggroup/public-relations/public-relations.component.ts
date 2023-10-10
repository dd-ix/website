import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "../../../../core/card/card.component";

@Component({
  selector: 'app-public-relations',
  standalone: true,
    imports: [CommonModule, CardComponent],
  templateUrl: './public-relations.component.html',
  styleUrls: ['./public-relations.component.scss']
})
export class PublicRelationsComponent {

}
