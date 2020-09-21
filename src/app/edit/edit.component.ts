import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
