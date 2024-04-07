import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from '../../keyboard/keyboard.component';
import { CalculatorService } from '../../../services/calculator.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatIconModule, FormsModule, KeyboardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  input: string = '(-2)^(1/2)';
  output: string = '';

  constructor(public calculatorService: CalculatorService) { }

  result() {
    // this.output = this.calculatorService.solveExpression(this.input);
    // this.calculatorService.setInput(this.input);
  }

  clear() {
    this.input = "";
  }

}
