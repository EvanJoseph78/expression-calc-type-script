import { Component } from '@angular/core';
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

  result() {
    this.output = this.calculatorService.solveExpression(this.input);
  }

  clear() {
    this.input = "";
  }

}
