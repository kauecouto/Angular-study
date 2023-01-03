import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsideComponent } from './menu-aside.component';

describe('MenuAsideComponent', () => {
  let component: MenuAsideComponent;
  let fixture: ComponentFixture<MenuAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
