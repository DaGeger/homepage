import { Component, OnInit } from '@angular/core';
import { Engine } from './engine';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {
  private searchText: '';
  private engineConfig: Engine[] = [];

  constructor() { }

  ngOnInit() {
    this.engineConfig.push({
      name: 'baidu',
      search: `https://www.baidu.com/s?wd=$wd`
    });
  }

  submit() {
    window.location.href = this.engineConfig[0].search.replace(/\$wd/, this.searchText);
  }

}
