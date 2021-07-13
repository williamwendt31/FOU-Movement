import { Component, Input, OnInit } from '@angular/core';
import { Founder } from 'src/models/founder';

@Component({
  selector: 'app-founder-background',
  templateUrl: './founder-background.component.html',
  styleUrls: ['./founder-background.component.scss']
})
export class FounderBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() founderObject: Founder;
}
