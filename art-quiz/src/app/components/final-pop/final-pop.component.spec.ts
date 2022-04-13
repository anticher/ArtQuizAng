import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPopComponent } from './final-pop.component';

describe('FinalPopComponent', () => {
  let component: FinalPopComponent;
  let fixture: ComponentFixture<FinalPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
