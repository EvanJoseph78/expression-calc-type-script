import { Component } from '@angular/core';
import { MenuBarComponent } from '../../shared/menu-bar/menu-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MenuBarComponent, MatIconModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  input: string = '(-2)^(1/2)';
  output: string = '';

  result() {
    this.output = this.solveExpression(this.input);
  }

  clear() {
    this.input = "";
  }

  solveExpression(expression: string): string {
    expression = expression.replaceAll("sen", "sin");
    expression = expression.replaceAll("º", "deg");
    try {
      const result = math.evaluate(expression);
      if (result.toString().includes("function")) {
        return "Expressão inválida";
      } else {
        return result.toString();
      }
    } catch (error) {
      return "Expressão inválida";
    }
  }
}
