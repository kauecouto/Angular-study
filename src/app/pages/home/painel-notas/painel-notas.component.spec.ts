import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelNotasComponent } from './painel-notas.component';

describe('PainelNotasComponent', () => {
  let component: PainelNotasComponent;
  let fixture: ComponentFixture<PainelNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
