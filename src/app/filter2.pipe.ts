import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})

// export class FilterPipe implements PipeTransform {
//   transform(items:any[], nameSearch: string, locationSearch: string){
//       if (items && items.length){
//           return items.filter(item =>{
//               if (nameSearch && item.cname.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
//                   return false;
//               }
//               if (locationSearch && item.response.toLowerCase().indexOf(locationSearch.toLowerCase()) === -1){
//                   return false;
//               }
//               return true;
//          })
//       }
//       else{
//           return items;
//       }
//   }
// }

export class Filter2Pipe implements PipeTransform {
  

   transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText= searchText.toLowerCase();
return items.filter( it => {
      return (it.shopname.toLowerCase().includes(searchText));
    });
   }


}
