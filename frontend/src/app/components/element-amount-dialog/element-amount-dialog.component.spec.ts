import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAmountDialogComponent } from './element-amount-dialog.component';

describe('ElementAmountDialogComponent', () => {
  let component: ElementAmountDialogComponent;
  let fixture: ComponentFixture<ElementAmountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAmountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAmountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
