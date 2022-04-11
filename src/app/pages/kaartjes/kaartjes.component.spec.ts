import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaartjesComponent } from './kaartjes.component';

describe('KaartjesComponent', () => {
  let component: KaartjesComponent;
  let fixture: ComponentFixture<KaartjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaartjesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaartjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
