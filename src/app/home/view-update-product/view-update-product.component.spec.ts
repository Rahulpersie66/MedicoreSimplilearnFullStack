import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateProductComponent } from './view-update-product.component';

describe('ViewUpdateProductComponent', () => {
  let component: ViewUpdateProductComponent;
  let fixture: ComponentFixture<ViewUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
