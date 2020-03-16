import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
//import { ReviewerComponent } from './reviewer/reviewer.component';

@NgModule({
    imports: [MatCardModule, MatButtonModule],
    exports: [MatCardModule, MatButtonModule],
})

export class MaterialModule{ }