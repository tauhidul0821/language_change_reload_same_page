import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangchangeComponent } from './langchange.component';

describe('LangchangeComponent', () => {
  let component: LangchangeComponent;
  let fixture: ComponentFixture<LangchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
