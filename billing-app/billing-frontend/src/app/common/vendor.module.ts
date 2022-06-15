import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

const vendorModules = [
  NzGridModule,
  NzLayoutModule,
  NzFormModule,
  NzSelectModule,
  NzButtonModule,
  NzInputModule
];

@NgModule({
  declarations: [],
  imports: [...vendorModules],
  providers: [],
  exports: [...vendorModules],
})
export class VendorModule {}
