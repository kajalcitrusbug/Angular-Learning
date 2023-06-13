import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRoutingExampleComponent } from './dynamic-routing-example.component';

describe('DynamicRoutingExampleComponent', () => {
  let component: DynamicRoutingExampleComponent;
  let fixture: ComponentFixture<DynamicRoutingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicRoutingExampleComponent]
    });
    fixture = TestBed.createComponent(DynamicRoutingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
