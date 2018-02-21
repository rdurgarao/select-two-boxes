import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTwoBoxesComponent } from './select-two-boxes.component';

describe('SelectTwoBoxesComponent', () => {
  let component: SelectTwoBoxesComponent;
  let fixture: ComponentFixture<SelectTwoBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTwoBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTwoBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
