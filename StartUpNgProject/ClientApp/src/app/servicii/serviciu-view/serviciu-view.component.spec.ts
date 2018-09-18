import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciuViewComponent } from './serviciu-view.component';

describe('ServiciuViewComponent', () => {
  let component: ServiciuViewComponent;
  let fixture: ComponentFixture<ServiciuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
