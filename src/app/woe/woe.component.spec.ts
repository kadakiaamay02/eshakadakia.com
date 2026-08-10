import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WOEComponent } from './woe.component';

describe('WOEComponent', () => {
  let component: WOEComponent;
  let fixture: ComponentFixture<WOEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WOEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WOEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
