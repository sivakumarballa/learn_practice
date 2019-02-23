import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component-templates',
  templateUrl: './component-templates.component.html',
  styleUrls: ['./component-templates.component.css'],
  // styles: ['h2 { font-size: 30px; }']
})
export class ComponentTemplatesComponent implements OnInit {

  @Input() age: number;
  @Output('appChange') ageChange = new EventEmitter<number>();
  @Output("reset") reset1 = new EventEmitter<number>();

  name: string = "Siva";
  employees: string[] = ["Siva", "Prasanna", "Ravi"];
  obj = {
    name: "siva",
    age: 10
  }
  flag: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  print() {
    alert(this.name);
  }

  inc() {
    this.age++;
    this.ageChange.emit(this.age);
  }

  onReset() {
    this.age = 0;
    this.reset1.emit(this.age);
  }

}
