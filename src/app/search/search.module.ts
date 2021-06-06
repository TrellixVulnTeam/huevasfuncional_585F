import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import {HomePageModule} from "../home/home.module";
import {HuecasComponent} from "../huecas/huecas.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchPageRoutingModule,
        HomePageModule
    ],
    declarations: [SearchPage, HuecasComponent]
})
export class SearchPageModule {}
