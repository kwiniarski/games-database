import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { YearSelectorComponent } from './year-selector.component';

describe('YearSelectorComponent', () => {
  let component: YearSelectorComponent;
  let fixture: ComponentFixture<YearSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        YearSelectorComponent
      ],
    });

    fixture = TestBed.createComponent(YearSelectorComponent);
    component = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should set selected year', () => {
  //   component.value = '2000-01-01,2000-12-31';
  //   fixture.detectChanges();

  //   const yearSelector = fixture.nativeElement.querySelector('#year');

  //   expect(yearSelector.value).toContain('2000-01-01,2000-12-31');
  // });

  it('should use provided range');
});
