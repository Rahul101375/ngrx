import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommondailogComponent } from './commondailog.component';

describe('CommondailogComponent', () => {
  let component: CommondailogComponent;
  let fixture: ComponentFixture<CommondailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommondailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommondailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
