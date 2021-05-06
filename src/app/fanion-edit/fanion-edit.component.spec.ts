import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanionEditComponent } from './fanion-edit.component';

describe('FanionEditComponent', () => {
  let component: FanionEditComponent;
  let fixture: ComponentFixture<FanionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
