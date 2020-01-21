import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, SearchEngineComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    IndexRoutingModule
  ],
  exports: [LayoutComponent]
})
export class IndexModule { }
