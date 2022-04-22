import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNamesComponent } from './filter-names.component';

describe('FilterNamesComponent', () => {
  let component: FilterNamesComponent;
  let fixture: ComponentFixture<FilterNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
