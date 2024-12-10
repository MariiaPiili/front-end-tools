import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenttiComponent } from './tentti.component';

describe('TenttiComponent', () => {
  let component: TenttiComponent;
  let fixture: ComponentFixture<TenttiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenttiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenttiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
