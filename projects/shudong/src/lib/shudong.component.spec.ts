import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShudongComponent } from './shudong.component';

describe('ShudongComponent', () => {
  let component: ShudongComponent;
  let fixture: ComponentFixture<ShudongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShudongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShudongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
