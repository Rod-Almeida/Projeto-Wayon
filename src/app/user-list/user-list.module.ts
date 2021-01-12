import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserListComponent } from './user-list.component';
import { UserListService } from './user-list.service';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAw7Hr7ZbGpJUEVCDkw_V_fhtrvHvXMHP4',
    }),
  ],
  providers: [
    UserListService,
  ]
})
export class UserListModule { }
