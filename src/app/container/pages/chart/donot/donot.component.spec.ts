import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonotComponent } from './donot.component';

describe('DonotComponent', () => {
  let component: DonotComponent;
  let fixture: ComponentFixture<DonotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
