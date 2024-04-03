import { Component, input } from '@angular/core';
import { MenuBarComponent } from '../../shared/menu-bar/menu-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MenuBarComponent, MatIconModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  input: string = '(2+3)';
  output: string = '';

  /**
   * Calcula a soma de partes em uma expressão matemática.
   * @param expression A expressão matemática contendo números e operadores de adição/subtração.
   * @returns Uma string representando o resultado da soma de todas as partes da expressão.
   */

  sumSubOperation(expression: string): string {
    let regexExpressionPattern: RegExp = /([+-]?\d+.?\d*)/g;
    let parts: string[] = [];
    let matchResult: RegExpExecArray | null;
    let result: number = 0

    while ((matchResult = regexExpressionPattern.exec(expression)) !== null) {
      parts.push(matchResult[1]);
    }

    parts.forEach(expressionPart => {
      result = result + Number(expressionPart);
    });

    return result.toString();
  }

  multOperation() {
    let regexExpressionPattern: RegExp = /([+-]?\d+)/g;
  }

  parentesisExpression(expression: string): string {
    let regexExpressionPattern: RegExp = /\(([^()]+)\)/g;

    let matchResult = expression.match(regexExpressionPattern);

    if (matchResult) {
      let expressionPart = matchResult[0];
      expressionPart = expressionPart.replace("(", "");
      expressionPart = expressionPart.replace(")", "");
      let result = this.mainFunction(expressionPart);
      expression = expression.replace(matchResult[0], result);
    }

    return expression;
  }

  mainFunction(expression: string): string {

    if (this.containsInvalidCharacters(expression)) {
      return "Expressão inválida!"
    }

    if (expression.includes("(")) {
      expression = this.parentesisExpression(expression);
    }

    if (expression.includes("*")) {

      return "multiplicação em breve"
    }

    expression = this.sumSubOperation(expression);

    return expression;
  }

  result() {
    this.parentesisExpression(this.input);
    this.output = this.sumSubOperation(this.input);
  }

  clear() {
    this.input = "";
  }

  containsInvalidCharacters(input: string): boolean {
    let allowedCharacters = "+-*/0123456789()[]{}.";
    for (let char of input) {
      if (allowedCharacters.indexOf(char) === -1) {
        return true; // Caractere inválido encontrado
      }
    }
    return false; // Nenhum caractere inválido encontrado
  }
}
