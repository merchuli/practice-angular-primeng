import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  constructor() { }

  text: string;
  results: string[];

  ngOnInit() {
  }

  search(event) {
    this.results = ['aaa', 'bbb', 'ccc'];
  }
}
