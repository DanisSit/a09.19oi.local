let student = [];
student['surname'] = 'Ситдиков';
student['name'] = 'Данис';
student['patronymic'] = 'Дагитович';
student['ocupation'] = 'Студент';
student['degree'] = 'Среднее';
student['category'] = 'Первая';
student['education'] = 'Пермский краевой колледж "Оникс"';
student['discipline'] = 'Прикладная информатика';
student['note'] = null;


document.write(
  'ФИО: ', student['surname'], ' ', student['name'], ' ', student['patronymic'], '<br>',
  'Должность: ', student['ocupation'], '<br>',
  'Уровень образования: ', student['degree'], '<br>',
  'Категория: ', student['category'], '<br>',
  'Образование: ', student['education'], '<br>',
  'Дисциплина: ', student['discipline'], '<br>',
  'Прочее: ', student['note']);
