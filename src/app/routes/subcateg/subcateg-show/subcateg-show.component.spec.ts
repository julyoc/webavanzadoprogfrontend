import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategShowComponent } from './subcateg-show.component';

describe('SubcategShowComponent', () => {
  let component: SubcategShowComponent;
  let fixture: ComponentFixture<SubcategShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
