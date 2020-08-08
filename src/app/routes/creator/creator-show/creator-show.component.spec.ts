import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorShowComponent } from './creator-show.component';

describe('CreatorShowComponent', () => {
  let component: CreatorShowComponent;
  let fixture: ComponentFixture<CreatorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
