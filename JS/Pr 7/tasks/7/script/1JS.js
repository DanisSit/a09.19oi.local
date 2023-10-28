let a = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
let Day = "СБ";

for (let i = 0; i < 7; i++) {
  if (a[i] == Day){
    const style = 'font-style: italic; font-size: 2em;'
    console.log("%c"+a[i]+"", style);
  } else{
    console.log(a[i]);
  }
}

