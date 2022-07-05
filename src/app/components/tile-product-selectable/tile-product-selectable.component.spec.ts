import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileProductSelectableComponent } from './tile-product-selectable.component';

describe('TileProductSelectableComponent', () => {
  let component: TileProductSelectableComponent;
  let fixture: ComponentFixture<TileProductSelectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileProductSelectableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileProductSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
