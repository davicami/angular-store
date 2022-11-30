import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount = 12;

  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(newItemsCount: number): void {
    this.itemsShowCount = newItemsCount;
  }

  onColumnsUpdated(newColsNum: number): void {
    console.log("new col count: " + newColsNum);
    this.columnsCountChange.emit(newColsNum);
  }
}
