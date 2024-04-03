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
  input: string = '';
  output: string = '';

  sumSubOperation(expression: string) {
    let regexExpressionPattern: RegExp = /([+-]?\d+)/g;
    let parts: string[] = [];
    let matchResult: RegExpExecArray | null;
    let result: number = 0

    while ((matchResult = regexExpressionPattern.exec(expression)) !== null) {
      parts.push(matchResult[1]);
    }

    console.log(parts);
    parts.forEach(expressionPart => {
      result = result + Number(expressionPart);
    });

    console.log(result);
    return result.toString();
  }

  result() {
    this.output = this.sumSubOperation(this.input);
  }

  clear() {
    this.input = "";
  }
}
