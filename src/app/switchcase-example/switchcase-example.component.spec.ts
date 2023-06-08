import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcaseExampleComponent } from './switchcase-example.component';

describe('SwitchcaseExampleComponent', () => {
  let component: SwitchcaseExampleComponent;
  let fixture: ComponentFixture<SwitchcaseExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchcaseExampleComponent]
    });
    fixture = TestBed.createComponent(SwitchcaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
