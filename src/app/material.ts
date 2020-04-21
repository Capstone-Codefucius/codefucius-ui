//material items used in header
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

//material items 
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

//feedback modal
import {MatRadioModule} from '@angular/material/radio';

//datepicker
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


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
        MatRadioModule,
      
        MatDatepickerModule,
        MatNativeDateModule


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

        MatRadioModule,
       
        MatDatepickerModule,
        MatNativeDateModule
        
    ],
    providers:[
        MatDatepickerModule
    ],
})
export class MaterialModule { }
