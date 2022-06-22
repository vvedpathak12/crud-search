import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertApiDetailsComponent } from './insert-api-details.component';

describe('InsertApiDetailsComponent', () => {
  let component: InsertApiDetailsComponent;
  let fixture: ComponentFixture<InsertApiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertApiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
