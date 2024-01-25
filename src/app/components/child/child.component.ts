import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GrandchildComponent } from '../grandchild/grandchild.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked
{
  @ViewChild(GrandchildComponent) grandChild: GrandchildComponent | undefined;
  @Input() value = 'default value';

  constructor() {
    console.log(
      `CHILD constructor -> value = ${this.value}. GrandChild: ${this.grandChild}`
    );
  }

  ngOnInit(): void {
    console.log(
      `CHILD ngOnInit -> value = ${this.value}. GrandChild: ${this.grandChild}`
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD Changes', changes);
    console.log(
      `CHILD ngOnChanges -> value = ${this.value}. GrandChild: ${this.grandChild}`
    );
  }

  ngOnDestroy(): void {
    console.log(
      `CHILD ngOnDestroy -> value = ${this.value}. GrandChild: ${this.grandChild}`
    );
  }

  ngDoCheck(): void {
    console.log(
      `CHILD ngDoCheck -> value = ${this.value}. GrandChild: ${this.grandChild}`
    );
  }

  ngAfterContentInit(): void {
    console.log(
      `CHILD ngAfterContentInit -> value = ${this.value}. GrandChild: ${this.grandChild}`
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      `CHILD ngAfterContentChecked -> value = ${this.value}. GrandChild: ${this.grandChild}`
    );
  }

  ngAfterViewInit(): void {
    console.log(
      `CHILD ngAfterViewInit -> value = ${this.value}. GrandChild:`,
      this.grandChild
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      `CHILD ngAfterViewChecked -> value = ${this.value}. GrandChild:`,
      this.grandChild
    );
  }
}
