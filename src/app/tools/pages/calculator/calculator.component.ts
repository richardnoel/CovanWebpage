import { Component, OnInit } from '@angular/core';
import sampleData from './data.json';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public society: any = sampleData.society;
  public articles: any = sampleData.articles;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(target1: String, target2: String): void {
    switch (target1) {
      case 'A':
        this.downloadFile(target2);
        break;
    }
  }

  getSocietys(societys: Array<String>): any {
    let socities = "";
    societys.forEach(item => {
      this.society.forEach((society: any) => {
        if(society.code === item){
          socities = socities + society.label + ",";
        }
      });
    });
    return socities;
  }
  downloadFile(target: String): void {
    let file: String = "";
    if (target === "A") {
      file = "normativa.pdf";
    } else if (target === "B") {
      file = "codigo_comercio.pdf";
    }
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = "assets/document/" + file;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
