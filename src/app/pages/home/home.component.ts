import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 3;
  category: string | undefined;

  constructor() {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onColumnsCountChange(colsNum: number): void {
    console.log("colonne: " + colsNum);
    this.cols = colsNum;
  }

  onShowCategory(newCategory: string): void {
    console.log("categoria: " + newCategory);
    this.category = newCategory;
  }
}
