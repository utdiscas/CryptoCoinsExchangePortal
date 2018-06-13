import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistartionComponent } from './view-registartion.component';

describe('ViewRegistartionComponent', () => {
  let component: ViewRegistartionComponent;
  let fixture: ComponentFixture<ViewRegistartionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegistartionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
