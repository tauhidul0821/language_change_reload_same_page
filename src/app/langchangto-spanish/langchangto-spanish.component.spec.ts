import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangchangtoSpanishComponent } from './langchangto-spanish.component';

describe('LangchangtoSpanishComponent', () => {
  let component: LangchangtoSpanishComponent;
  let fixture: ComponentFixture<LangchangtoSpanishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangchangtoSpanishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangchangtoSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
