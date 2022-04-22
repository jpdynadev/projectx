import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-names',
  templateUrl: './filter-names.component.html',
  styleUrls: ['./filter-names.component.scss']
})
export class FilterNamesComponent implements OnInit {
  arr = ["jp", "jpbob", "bob"]

  constructor() { }

  ngOnInit(): void {
    this.filterOnString(this.arr, "bob")
  }
// Array<String>
  filterOnString(array: string[], filterOn: string) : void {
    let array2: string[] = []
    for(let i = 0; i < array.length; i++){
      if(array[i].includes(filterOn)){
        array2.push(array[i])
      }
    }
    this.arr = [...array2]
  }

  // [ "jp", "jpbob" "bob"]
  // [ "jpbob", "bob"]

  // [ null, "jpbob, "bob]
}
