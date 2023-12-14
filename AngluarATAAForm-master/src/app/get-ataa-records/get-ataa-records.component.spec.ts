import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAtaaRecordsComponent } from './get-ataa-records.component';

describe('GetAtaaRecordsComponent', () => {
  let component: GetAtaaRecordsComponent;
  let fixture: ComponentFixture<GetAtaaRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAtaaRecordsComponent]
    });
    fixture = TestBed.createComponent(GetAtaaRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
