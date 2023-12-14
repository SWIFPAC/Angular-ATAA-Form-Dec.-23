import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtaaRecordComponent } from './add-ataa-record.component';

describe('AddAtaaRecordComponent', () => {
  let component: AddAtaaRecordComponent;
  let fixture: ComponentFixture<AddAtaaRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAtaaRecordComponent]
    });
    fixture = TestBed.createComponent(AddAtaaRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
