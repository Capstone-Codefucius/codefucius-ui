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


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,

        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,

        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule
    ]
})
export class MaterialModule { }
