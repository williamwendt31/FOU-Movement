import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderBackgroundComponent } from './founder-background.component';

describe('FounderBackgroundComponent', () => {
  let component: FounderBackgroundComponent;
  let fixture: ComponentFixture<FounderBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FounderBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
