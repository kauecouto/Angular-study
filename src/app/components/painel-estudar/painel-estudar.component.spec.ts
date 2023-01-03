import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEstudarComponent } from './painel-estudar.component';

describe('PainelEstudarComponent', () => {
  let component: PainelEstudarComponent;
  let fixture: ComponentFixture<PainelEstudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelEstudarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelEstudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
