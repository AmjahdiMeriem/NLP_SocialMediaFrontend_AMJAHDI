import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Participants2Component } from './participants2.component';

describe('Participants2Component', () => {
  let component: Participants2Component;
  let fixture: ComponentFixture<Participants2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Participants2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Participants2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
