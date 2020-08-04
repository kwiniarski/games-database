import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { GeneSelectorComponent, GeneSelectorService } from './components/gene-selector';
import { YearSelectorComponent } from './components/year-selector';
import { SortSelectorComponent } from './components/sort-selector';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [
        AppComponent,
        GeneSelectorComponent,
        YearSelectorComponent,
        SortSelectorComponent
      ],
      providers: [
        GeneSelectorService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
