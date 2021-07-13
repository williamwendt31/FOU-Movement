import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderPictureComponent } from './founder-picture.component';

describe('FounderPictureComponent', () => {
  let component: FounderPictureComponent;
  let fixture: ComponentFixture<FounderPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FounderPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
