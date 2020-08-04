import { Component, ChangeDetectionStrategy, Input, Output, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';

const CURRENT_YEAR = (new Date()).getFullYear();

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearSelectorComponent {
  @HostBinding('class') class = 'field is-horizontal';

  @Input() value: number;
  @Input() rangeEnd: number = CURRENT_YEAR;
  @Input() rangeStart = 1990;

  @Output() update: Subject<string> = new Subject();

  get years(): number[] {
    const years = [];
    for (let i = this.rangeEnd; i >= this.rangeStart; i--) {
      years.push(i);
    }

    return years;
  }
}
