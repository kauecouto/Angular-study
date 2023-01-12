import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAgendaComponent } from './painel-agenda.component';

describe('PainelAgendaComponent', () => {
  let component: PainelAgendaComponent;
  let fixture: ComponentFixture<PainelAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
