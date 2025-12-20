import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setCopyright()', () => {
    it('sets the copyright for a single year', () => {
      const currentYear = 2025;
      const testResult = '2025';
      const result = component.setCopyright(currentYear);
      expect(result).toBe(testResult);
    });

    it('sets the copyright to a range for future dates', () => {
      const currentYear = 2050;
      const testResult = '2025-2050';
      const result = component.setCopyright(currentYear);
      expect(result).toBe(testResult);
    });
  });
});
