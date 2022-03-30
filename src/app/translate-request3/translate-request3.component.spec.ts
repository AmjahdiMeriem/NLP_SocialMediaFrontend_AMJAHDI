import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateRequest3Component } from './translate-request3.component';

describe('TranslateRequest3Component', () => {
  let component: TranslateRequest3Component;
  let fixture: ComponentFixture<TranslateRequest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateRequest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateRequest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
