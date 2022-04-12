import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsDebugComponent } from './analytics-debug.component';

describe('AnalyticsDebugComponent', () => {
  let component: AnalyticsDebugComponent;
  let fixture: ComponentFixture<AnalyticsDebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsDebugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
