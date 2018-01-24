import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticStudentsComponent } from './static-students.component';

describe('StaticStudentsComponent', () => {
  let component: StaticStudentsComponent;
  let fixture: ComponentFixture<StaticStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
