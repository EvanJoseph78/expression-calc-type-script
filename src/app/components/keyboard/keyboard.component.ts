import { Component, input } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

  input: string = '(-2)^(1/2)';
  output: string = '';

  constructor(public calculatorService: CalculatorService) { }

  keyboard(char: string) {
    this.input = this.input + char;
  }

  backspace() {
    // this.output = this.calculatorService.solveExpression(this.input);
    this.input = this.input.slice(0, -1);
  }

  clear() {
    this.input = "";
  }

  moveCursor(direction: 'left' | 'right', inputElement: HTMLInputElement) {
    const currentPosition = inputElement.selectionStart;
    if (currentPosition !== null) {
      if (direction === 'left' && currentPosition > 0) {
        inputElement.setSelectionRange(currentPosition - 1, currentPosition - 1);
      } else if (direction === 'right' && currentPosition < inputElement.value.length) {
        inputElement.setSelectionRange(currentPosition + 1, currentPosition + 1);
      }
    }
  }
}
