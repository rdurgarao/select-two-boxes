import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-two-boxes',
  templateUrl: './select-two-boxes.component.html',
  styleUrls: ['./select-two-boxes.component.sass']
})
export class SelectTwoBoxesComponent implements OnInit {
  public box1: any = [];
  public box2: any = [];

  static formatData(name) {
    return {
      name: name,
      selected: false
    };
  }

  static clearSelectionOnItem(item) {
    item['selected'] = false;
  }

  constructor() {
  }

  ngOnInit() {
    const box1Data = [1, 2, 3, 4];
    const box2Data = [1, 2, 3, 4];

    this.box1 = box1Data.map(item => SelectTwoBoxesComponent.formatData(item));
    this.box2 = box2Data.map(item => SelectTwoBoxesComponent.formatData(item));
  }

  toggleItem(item) {
    item['selected'] = !(item['selected']);
  }

  moveToSelected() {
    const selectedValues = this.box1.filter(item => item.selected);
    const nonSelectedValues = this.box1.filter(item => !item.selected);

    selectedValues.forEach((item, index) => {
      item['selected'] = false;
      this.box2.push(item);
    });

    this.box1 = nonSelectedValues;
    this.clearSelectionOfAvailableImports();
  }

  moveToAvailable() {
    const selectedValues = this.box2.filter(item => item.selected);
    const nonSelectedValues = this.box2.filter(item => !item.selected);

    selectedValues.forEach((item, index) => {
      item['selected'] = false;
      this.box1.push(item);
    });

    this.box2 = nonSelectedValues;
    this.clearSelectionOfSelectedImports();
  }

  clearSelectionOfAvailableImports() {
    this.box1.forEach(item => {
      SelectTwoBoxesComponent.clearSelectionOnItem(item);
    });
  }

  clearSelectionOfSelectedImports() {
    this.box2.forEach(item => {
      SelectTwoBoxesComponent.clearSelectionOnItem(item);
    });
  }
}
