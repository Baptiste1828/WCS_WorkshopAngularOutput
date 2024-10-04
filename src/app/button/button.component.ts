import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() name!: string;
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  sendNotification(): void {
    this.notifyParent.emit(this.name + " a été cliqué !");
  }
}
