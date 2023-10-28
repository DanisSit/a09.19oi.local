let a = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
let Year = Data.getFullYear();
let Month = Data.getMonth();
let Day = Data.getDate();

for (let i = 0; i < 7; i++) {
  if (a[i] = getWeekDay(Year, Month, Day)){
    const style = 'font-style: italic; font-size: 2em;'
    console.log("%c"+a[i]+"", style);
  } else{
    console.log(a[i]);
  }
}
console.log(Day);

