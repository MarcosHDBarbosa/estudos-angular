import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoEstudo } from './topico-estudo';

describe('TopicoEstudo', () => {
  let component: TopicoEstudo;
  let fixture: ComponentFixture<TopicoEstudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicoEstudo],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicoEstudo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
