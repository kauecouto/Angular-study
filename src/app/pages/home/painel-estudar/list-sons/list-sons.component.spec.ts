import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSonsComponent } from './list-sons.component';

describe('ListSonsComponent', () => {
  let component: ListSonsComponent;
  let fixture: ComponentFixture<ListSonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
