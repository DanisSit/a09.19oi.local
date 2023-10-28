let a = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресерье'];
for (let i = 0; i < 7; i++) {
  if (i == 5 || i == 6){
    const style = 'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;'
    console.log("%c"+a[i]+"", style);
  } else{
    console.log(a[i]);
  }
}

