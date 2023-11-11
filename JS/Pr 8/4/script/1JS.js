let student = {
  surname: 'Ситдиков',
  name: 'Данис',
  patronymic: 'Дагитович',
  ocupation: 'Студент',
  category: 'Первая',
  education: 'ППК "Оникс"',
  discipline: 'Прикладная информатика',
  note: null
};

let $qwf = document.querySelector('#person');
$qwf.innerHTML = `
<h2> ${student.surname} ${student.name} ${student.patronymic}
</h2>
<p><i>Должность: </i> ${student.ocupation} <p>
<p><i>Уровень образования: </i> ${student.degree} <p>
<p><i>Категория: </i> ${student.category} <p>
<p><i>Образование: </i> ${student.education} <p>
<p><i>Дисциплина: </i> ${student.discipline} <p>
<p><i>Прочее: </i> ${student.note} <p>`;