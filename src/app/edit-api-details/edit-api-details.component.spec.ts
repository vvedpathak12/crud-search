import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApiDetailsComponent } from './edit-api-details.component';

describe('EditApiDetailsComponent', () => {
  let component: EditApiDetailsComponent;
  let fixture: ComponentFixture<EditApiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
