import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input()
  label: string = "";
  @Input()
  icon: boolean = false;

}
