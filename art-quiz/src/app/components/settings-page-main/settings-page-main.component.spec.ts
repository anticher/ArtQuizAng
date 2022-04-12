import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageMainComponent } from './settings-page-main.component';

describe('SettingsPageMainComponent', () => {
  let component: SettingsPageMainComponent;
  let fixture: ComponentFixture<SettingsPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
