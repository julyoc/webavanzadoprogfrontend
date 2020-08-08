import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusShowComponent } from './status-show.component';

describe('StatusShowComponent', () => {
  let component: StatusShowComponent;
  let fixture: ComponentFixture<StatusShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
