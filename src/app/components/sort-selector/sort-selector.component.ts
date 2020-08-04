import { Component, ChangeDetectionStrategy, Output, TemplateRef, HostBinding, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { RawgOrdering } from '../../common/rawg';

@Component({
  selector: 'app-sort-selector',
  templateUrl: './sort-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortSelectorComponent {
  readonly orderingList: RawgOrdering[] = ['name', 'rating', 'released'];

  @HostBinding('class') class = 'field is-horizontal';
  @Output() update: Subject<string> = new Subject();
  @Input() value: RawgOrdering | string;

  get ordering(): RawgOrdering {
    return this.value.replace(/[^a-z]+/, '') as RawgOrdering;
  }

  get descending(): boolean {
    return this.value.charAt(0) === '-';
  }

  next(ordering: string, desc: boolean = false): void {
    this.update.next(desc ? '-' + ordering : ordering);
  }
}
