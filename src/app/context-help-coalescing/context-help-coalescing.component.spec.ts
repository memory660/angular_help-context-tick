import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextHelpCoalescingComponent } from './context-help-coalescing.component';

describe('ContextHelpCoalescingComponent', () => {
  let component: ContextHelpCoalescingComponent;
  let fixture: ComponentFixture<ContextHelpCoalescingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextHelpCoalescingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextHelpCoalescingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
