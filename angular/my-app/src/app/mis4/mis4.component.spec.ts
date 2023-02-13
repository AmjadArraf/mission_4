import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mis4Component } from './mis4.component';

describe('Mis4Component', () => {
  let component: Mis4Component;
  let fixture: ComponentFixture<Mis4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mis4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mis4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
