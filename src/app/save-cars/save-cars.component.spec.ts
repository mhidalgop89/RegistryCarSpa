import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCarsComponent } from './save-cars.component';

describe('SaveCarsComponent', () => {
  let component: SaveCarsComponent;
  let fixture: ComponentFixture<SaveCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
