import { Component, OnInit } from '@angular/core';
import { Founder } from '../../models/founder';
import { Founders } from '../../models/founders';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  founders: Founder[] = new Array<Founder>();

  get currentImagePath(): string {
    return this.currentFounder?.imagePath;
  }

  private _currentFounder: Founder;
  get currentFounder(): Founder {
    return this._currentFounder ?? (this._currentFounder = this.founders[0]);
  }

  constructor() { }

  ngOnInit(): void {
    for (const f of Founders.founders) this.founders.push(new Founder(f.name, f.background, f.imagePath));
  }

  handleFounderSelection(event: Founder): void {
    this._currentFounder = event;
  }
}
