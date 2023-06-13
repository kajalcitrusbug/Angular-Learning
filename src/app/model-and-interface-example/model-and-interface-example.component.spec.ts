import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAndInterfaceExampleComponent } from './model-and-interface-example.component';

describe('ModelAndInterfaceExampleComponent', () => {
  let component: ModelAndInterfaceExampleComponent;
  let fixture: ComponentFixture<ModelAndInterfaceExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelAndInterfaceExampleComponent]
    });
    fixture = TestBed.createComponent(ModelAndInterfaceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
