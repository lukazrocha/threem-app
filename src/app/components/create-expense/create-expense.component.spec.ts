import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpenseComponent } from './create-expense.component';

describe('CreateExpenseComponent', () => {
  let component: CreateExpenseComponent;
  let fixture: ComponentFixture<CreateExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateExpenseComponent]
    });
    fixture = TestBed.createComponent(CreateExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
