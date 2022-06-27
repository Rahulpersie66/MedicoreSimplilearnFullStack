import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], MedicoreProduct: any[],prodName:string): any {
    const sortField=MedicoreProduct[0];

    //sorting method
    value.sort((a:any,b:any)=>{
      if(a[sortField]<b[sortField])
        return -1;
      else if(a[sortField]>b[sortField])
        return 1;
      //if equal
      else 
        return 0;
      
    });
  }

}
