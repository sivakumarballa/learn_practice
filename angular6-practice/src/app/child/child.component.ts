import { Component, OnInit, Input, Output, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, SimpleChanges, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  title = 'app';

  @Input('name') name: String;
  @Input('age') age: number;
  @Input('data') data: string[];

  @Output() setAge = new EventEmitter<number>();

  constructor(private cd: ChangeDetectorRef) {
    console.log(`Constructor - ${this.name}`);
  }
  ngOnInit() {
    console.log(`ngOnInit - ${this.name}`);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(`ngOnChanges - ${this.name}`);
  }
  ngDoCheck() {
    // this.cd.markForCheck();
    console.log("ngDoCheck - Child");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked - Child");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked - Child");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  onClick() {

  }
}
