import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [FormsModule, MatIconModule, CommonModule, BtnComponent],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

  input: string = '(-2)^(1/2)';
  output: string = '';
  extraBtns: boolean = false;

  constructor(public calculatorService: CalculatorService) { }

  keyboard(char: string) {
    this.input = this.input + char;
  }

  backspace() {
    this.input = this.input.slice(0, -1);
  }

  clear() {
    this.input = "";
  }

  toggleExtraBtns() {
    this.extraBtns = !this.extraBtns;
  }
}
