import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoEstudo } from './plano-estudo';

describe('PlanoEstudo', () => {
  let component: PlanoEstudo;
  let fixture: ComponentFixture<PlanoEstudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoEstudo],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanoEstudo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
