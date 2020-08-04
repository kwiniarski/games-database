import { Component, ChangeDetectionStrategy, OnInit, Output, HostBinding, Input } from '@angular/core';
import { GeneSelectorService } from './gene-selector.service';
import { Observable, Subject } from 'rxjs';
import { RawgGene } from 'src/app/common/rawg';

@Component({
  selector: 'app-gene-selector',
  templateUrl: './gene-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneSelectorComponent implements OnInit {
  @HostBinding('class') class = 'field is-horizontal';
  @Input() value: number;

  @Output() update: Subject<string> = new Subject();

  genes$: Observable<RawgGene[]>;

  constructor(private service: GeneSelectorService) {}

  ngOnInit(): void {
    this.genes$ = this.service.getAll();
  }
}


