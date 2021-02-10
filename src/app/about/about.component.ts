import { Component, OnInit } from '@angular/core';
import { CREATORS } from './../shared/creators';
import { Creator } from './../shared/creator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  creators: Creator[] = CREATORS;
  constructor() { }

  ngOnInit(): void {
  }

}
