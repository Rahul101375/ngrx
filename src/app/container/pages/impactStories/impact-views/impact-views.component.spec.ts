import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactViewsComponent } from './impact-views.component';

describe('ImpactViewsComponent', () => {
  let component: ImpactViewsComponent;
  let fixture: ComponentFixture<ImpactViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
