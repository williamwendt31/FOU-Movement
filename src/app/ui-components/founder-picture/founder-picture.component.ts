import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Founder } from 'src/models/founder';

@Component({
  selector: 'app-founder-picture',
  templateUrl: './founder-picture.component.html',
  styleUrls: ['./founder-picture.component.scss']
})
export class FounderPictureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() founderObject: Founder;

  @Output() onFounderSelected = new EventEmitter<Founder>();

  get imagePath(): string {
    return this.founderObject?.imagePath;
  }

  handleClick(): void {
    this.onFounderSelected.emit(this.founderObject);
  }
}
