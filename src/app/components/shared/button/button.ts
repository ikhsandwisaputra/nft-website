import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html'
})
export class Button {
@Input() label: string ="";
}
