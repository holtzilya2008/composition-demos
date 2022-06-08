import { Pipe, PipeTransform } from '@angular/core';
import { DropdownService } from 'src/app/api/services/dropdown.service';

@Pipe({
  name: 'isTaxRequired',
})
export class TaxRequiredPipe implements PipeTransform {
  constructor(private dropdownService: DropdownService) {}

  transform(customerId: string): boolean {
    const customer = this.dropdownService.getCustomerById(customerId);
    return customer ? !!customer.taxRequired : false;
  }
}
