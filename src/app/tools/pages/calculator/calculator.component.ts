import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadFile(): void {
    debugger
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/document/normativa.pdf';
    link.target="_blank";
    //link.download = path;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
