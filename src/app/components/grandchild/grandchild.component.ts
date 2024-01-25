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
} from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrl: './grandchild.component.scss',
})
export class GrandchildComponent
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
  constructor() {
    console.log(`GRAND CHILD constructor -> value = ${this.value}`);
  }

  @Input() value = 'default value';

  ngOnInit(): void {
    console.log(`GRAND CHILD ngOnInit -> value = ${this.value}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('GRAND CHILD Changes', changes);
    console.log(`GRAND CHILD ngOnChanges -> value = ${this.value}`);
  }

  ngOnDestroy(): void {
    console.log(`GRAND CHILD ngOnDestroy -> value = ${this.value}`);
  }

  ngDoCheck(): void {
    console.log(`GRAND CHILD ngDoCheck -> value = ${this.value}`);
  }

  ngAfterViewInit(): void {
    console.log(`GRAND CHILD ngAfterViewInit -> value = ${this.value}`);
  }

  ngAfterViewChecked(): void {
    console.log(`GRAND CHILD ngAfterViewChecked -> value = ${this.value}`);
  }

  ngAfterContentInit(): void {
    console.log(`GRAND CHILD ngAfterContentInit -> value = ${this.value}`);
  }

  ngAfterContentChecked(): void {
    console.log(`GRAND CHILD ngAfterContentChecked -> value = ${this.value}`);
  }
}
