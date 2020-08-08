import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategShowComponent } from './categ-show.component';

describe('CategShowComponent', () => {
  let component: CategShowComponent;
  let fixture: ComponentFixture<CategShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
