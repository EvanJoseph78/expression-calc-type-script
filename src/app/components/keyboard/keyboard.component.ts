import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface KeyboardButton {
  label: string;
  action: () => void;
  icon: boolean;
}

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [FormsModule, MatIconModule, CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

  input: string = '(-2)^(1/2)';
  output: string = '';
  extraBtns: boolean = false;

  keyboardButtons: KeyboardButton[] = [

    { label: 'add_circle', action: () => this.toggleExtraBtns(), icon: true },
    { label: '!', action: () => this.keyboard('!'), icon: false },
    { label: '=', action: () => this.keyboard('='), icon: false },
    { label: 'chevron_left', action: () => this.keyboard('<'), icon: true },
    { label: 'chevron_right', action: () => this.keyboard('>'), icon: true },
    { label: 'backspace', action: () => this.backspace(), icon: true },

    { label: '(', action: () => this.keyboard('('), icon: false },
    { label: ')', action: () => this.keyboard(')'), icon: false },
    { label: '7', action: () => this.keyboard('7'), icon: false },
    { label: '8', action: () => this.keyboard('8'), icon: false },
    { label: '9', action: () => this.keyboard('9'), icon: false },
    { label: '÷', action: () => this.keyboard('/'), icon: false },

    { label: 'sen', action: () => this.keyboard('sen('), icon: false },
    { label: 'cos', action: () => this.keyboard('cos('), icon: false },
    { label: '4', action: () => this.keyboard('4'), icon: false },
    { label: '5', action: () => this.keyboard('5'), icon: false },
    { label: '6', action: () => this.keyboard('5'), icon: false },
    { label: '×', action: () => this.keyboard('×'), icon: false },

    { label: 'e', action: () => this.keyboard('e'), icon: false },
    { label: '^', action: () => this.keyboard('^'), icon: false },
    { label: '1', action: () => this.keyboard('1'), icon: false },
    { label: '2', action: () => this.keyboard('2'), icon: false },
    { label: '3', action: () => this.keyboard('3'), icon: false },
    { label: '-', action: () => this.keyboard('-'), icon: false },

    { label: 'π', action: () => this.keyboard('π'), icon: false },
    { label: '√', action: () => this.keyboard('sqrt('), icon: false },
    { label: '.', action: () => this.keyboard('.'), icon: false },
    { label: '0', action: () => this.keyboard('0'), icon: false },
    { label: ',', action: () => this.keyboard(','), icon: false },
    { label: '+', action: () => this.keyboard('+'), icon: false },


    // Adicione mais botões conforme necessário
  ];

  // keyboardButtons2: KeyboardButton[] = [
  //
  //   { label: 'arrow_back', action: () => this.toggleExtraBtns(), icon: true },
  //   { label: 'i', action: () => this.keyboard('i'), icon: false },
  //   { label: '≠', action: () => this.keyboard('≠'), icon: false },
  //   { label: '≤', action: () => this.keyboard('≤'), icon: false },
  //   { label: '≥', action: () => this.keyboard('≥'), icon: false },
  //   { label: 'backspace', action: () => this.backspace(), icon: true },
  //
  //   { label: '[', action: () => this.keyboard('['), icon: false },
  //   { label: ']', action: () => this.keyboard(']'), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '%', action: () => this.keyboard('%'), icon: false },
  //
  //   { label: 'tan', action: () => this.keyboard('tan('), icon: false },
  //   { label: 'log', action: () => this.keyboard('log('), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: 'º', action: () => this.keyboard('º'), icon: false },
  //
  //   { label: '{', action: () => this.keyboard('{'), icon: false },
  //   { label: '}', action: () => this.keyboard('}'), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //   { label: ';', action: () => this.keyboard(';'), icon: false },
  //   { label: '', action: () => this.keyboard(''), icon: false },
  //
  // ];


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

  toggleExtraBtns() {
    this.extraBtns = !this.extraBtns;
  }
}
