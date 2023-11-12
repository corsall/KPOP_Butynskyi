import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() numbers: string = '';

    get difference(): number | undefined {
      if (this.numbers) {
        const numArray = this.numbers.split(',').map(Number);
        const maxNumber = Math.max(...numArray);
        const minNumber = Math.min(...numArray);
        return maxNumber - minNumber;
      }
      return undefined;
    }
}
