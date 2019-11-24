import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule,MatIconModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatSelectModule, MatTableModule} from '@angular/material';



const Material =[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatStepperModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule
]


@NgModule({
  declarations: [],
  imports: [
    Material  ],
  exports:[
    Material
  ]
})
export class MaterialModule { }
