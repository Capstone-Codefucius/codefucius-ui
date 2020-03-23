//added this file for material
//material items used in header
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

//material items using in login page
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

//feedback page
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,

        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,

        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,

        MatRadioModule
    ]
})
export class MaterialModule { }
