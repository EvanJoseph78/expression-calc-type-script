import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs'; // Importa apenas o método evaluate de mathjs

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  solveExpression(expression: string): string {
    expression = this.usefulReplaces(expression);
    if (expression == "") {
      return "0";
    }

    try {
      const result = evaluate(expression); // Usa o método evaluate diretamente
      if (result.toString().includes("function")) {
        return "Expressão inválida";
      } else {
        return result.toString();
      }
    } catch (error) {
      return "Expressão inválida";
    }
  }

  usefulReplaces(expression: string): string {
    expression = expression.replaceAll("sen", "sin");
    expression = expression.replaceAll("º", "deg");
    expression = expression.replaceAll("tg", "tan");
    expression = expression.replaceAll("π", "pi");
    expression = expression.replaceAll("×", "*");
    expression = expression.replaceAll("≥", ">=");
    expression = expression.replaceAll("≤", "<=");
    expression = expression.replaceAll("≠", "!=");

    return expression;
  }
}

