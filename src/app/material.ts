//added this file for material
//add different items from here as an import
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
    imports: [MatButtonModule, MatToolbarModule,MatIconModule],
    exports: [MatButtonModule, MatToolbarModule,MatIconModule]
})
export class MaterialModule { }