import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaticstudentComponent } from './edit-staticstudent.component';

describe('EditStaticstudentComponent', () => {
  let component: EditStaticstudentComponent;
  let fixture: ComponentFixture<EditStaticstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStaticstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaticstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
