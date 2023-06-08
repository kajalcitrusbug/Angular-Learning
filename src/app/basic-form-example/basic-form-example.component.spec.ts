import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormExampleComponent } from './basic-form-example.component';

describe('BasicFormExampleComponent', () => {
  let component: BasicFormExampleComponent;
  let fixture: ComponentFixture<BasicFormExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormExampleComponent]
    });
    fixture = TestBed.createComponent(BasicFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
