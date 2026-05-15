import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudos } from './lista-estudos';

describe('ListaEstudos', () => {
  let component: ListaEstudos;
  let fixture: ComponentFixture<ListaEstudos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEstudos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEstudos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
