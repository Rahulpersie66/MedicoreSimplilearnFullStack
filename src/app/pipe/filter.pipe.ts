import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, prodName:string): any[] {
    const result:any=[];
    //if search is empty
    if(!value || filterString === '' || prodName === '' )
        {
          return value;
        }

      // else part
      value.forEach((a:any)=>{
        if(a[prodName].trim().toLowerCase().includes(filterString.toLowerCase()))
          {
            result.push(a);
          }  
      });
      //return the if or else result
      return result;
  }


}
