export namespace DateUtils {

 export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
 }
 
 export function daysBetween(startDate: Date, endDate: Date): string {
  // if (startDate.getTime() > endDate.getTime()) {
  // throw new Error('Конечная дата не может быть раньше начальной');
  // }
  const diff = Math.abs(endDate.getTime() - startDate.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return `Осталось:\n дней:${days}, часов:${hours}, минут:${minutes}, секунд:${seconds}`;
 }
}


// export namespace DateUtils {
//     export function formatDate (date: Date): string {
//         const year = date.getFullYear();
//         const month = String(date.getMonth()+1).padStart(2, '0');
//         const day = String(date.getDate()).padStart(2, '0');
//         return `${year}-${month}-${day}`
//     }


//     // Возвращает количество дней между двумя датами
//     export function daysBetween(date1: Date, date2: Date): number {
//       const msInDay = 1000 * 60 * 60 * 24;
    
//       const start = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
//       const end = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    
//       const diff = Math.abs(end.getTime() - start.getTime());
//       return Math.floor(diff / msInDay);
//     }
// }



