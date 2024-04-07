import { Injectable, input } from '@angular/core';

import * as math from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  solveExpression(expression: string): string {
    expression = this.usefullReplaces(expression);
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

  usefullReplaces(expression: string): string {
    expression = expression.replaceAll("sen", "sin");
    expression = expression.replaceAll("º", "deg");
    expression = expression.replaceAll("tg", "tan");
    expression = expression.replaceAll("π", "pi");
    return expression;
  }

}
