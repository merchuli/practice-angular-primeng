import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  constructor() { }

  text: string;
  texts: string[];
  results: string[];

  ngOnInit() {
  }

  search(event) {
    this.results = ['aaa', 'bbb', 'ccc'];
  }
}
