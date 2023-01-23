import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricPomoComponent } from './historic-pomo.component';

describe('HistoricPomoComponent', () => {
  let component: HistoricPomoComponent;
  let fixture: ComponentFixture<HistoricPomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricPomoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricPomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
