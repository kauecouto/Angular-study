import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstudarComponent } from './home-estudar.component';

describe('HomeComponent', () => {
  let component: HomeEstudarComponent;
  let fixture: ComponentFixture<HomeEstudarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEstudarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEstudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
