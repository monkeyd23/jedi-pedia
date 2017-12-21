import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJediComponent } from './edit-jedi.component';

describe('EditJediComponent', () => {
  let component: EditJediComponent;
  let fixture: ComponentFixture<EditJediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
