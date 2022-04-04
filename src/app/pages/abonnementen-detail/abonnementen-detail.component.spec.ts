import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementenDetailComponent } from './abonnementen-detail.component';

describe('AbonnementenDetailComponent', () => {
  let component: AbonnementenDetailComponent;
  let fixture: ComponentFixture<AbonnementenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementenDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
