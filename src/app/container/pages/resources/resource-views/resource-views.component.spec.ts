import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceViewsComponent } from './resource-views.component';

describe('ResourceViewsComponent', () => {
  let component: ResourceViewsComponent;
  let fixture: ComponentFixture<ResourceViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
