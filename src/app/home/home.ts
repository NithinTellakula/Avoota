import { Component } from '@angular/core';
import {SearchBarComponent} from '../search/search';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
