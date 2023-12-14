import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtarComponentComponent } from './atar-component.component';

describe('AtarComponentComponent', () => {
  let component: AtarComponentComponent;
  let fixture: ComponentFixture<AtarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtarComponentComponent]
    });
    fixture = TestBed.createComponent(AtarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
