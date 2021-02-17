import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellbookComponent } from './sellbook.component';

describe('SellbookComponent', () => {
  let component: SellbookComponent;
  let fixture: ComponentFixture<SellbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
