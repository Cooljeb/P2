import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsCptComponent } from './signals-cpt.component';

describe('SignalsCptComponent', () => {
  let component: SignalsCptComponent;
  let fixture: ComponentFixture<SignalsCptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsCptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
