import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootStrapExampleComponent } from './boot-strap-example.component';

describe('BootStrapExampleComponent', () => {
  let component: BootStrapExampleComponent;
  let fixture: ComponentFixture<BootStrapExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootStrapExampleComponent]
    });
    fixture = TestBed.createComponent(BootStrapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
