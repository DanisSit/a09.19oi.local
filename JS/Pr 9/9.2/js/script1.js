let name = ['Dolor sit amet','Aliquam eleifend','Nunc a ante feugiat','Ut consequat auctor enim et dictum','Sed ultricies mauris quam'];
let content = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sem a ligula sagittis, ac finibus mauris aliquet. ',
    'Aliquam eleifend consequat purus, a tincidunt odio vehicula eget. Sed sollicitudin, urna vitae elementum iaculis, leo tellus tristique tortor, quis condimentum justo sem sit amet sem. Fusce mattis metus metus, sed egestas tellus faucibus quis. ',
    'Nunc a ante feugiat, hendrerit nunc sed, tristique ipsum. In hac habitasse platea dictumst. Etiam dapibus mattis nulla a consequat. Phasellus nec nunc et dui condimentum tristique. ',
    'Ut consequat auctor enim et dictum. Maecenas venenatis et diam porta egestas. Suspendisse id erat lorem. Aenean consequat magna vitae eleifend accumsan. Suspendisse rhoncus pulvinar interdum. Aliquam vitae diam sed massa fermentum elementum.',
    'Sed ultricies mauris quam, vel feugiat leo iaculis vitae. Donec nulla ex, maximus ac dapibus posuere, sagittis at nisi.'
];
function showContent() {
  const $header = document.createElement('h2');
  const $text = document.createTextNode('Lorem ipsum');
  $header.append($text);
  document.body.append($header);

    var temp, item, item1, item2, a, b, i;
    temp = document.getElementsByTagName("template")[0];
    item = temp.content.querySelector("h3");
    item1 = temp.content.querySelector("p");

    for (i = 0; i < name.length; i++) {
      a = document.importNode(item, true);
      a.textContent += name[i];
      b = document.importNode(item1, true);
      b.textContent += content[i];
      document.body.appendChild(a);
      document.body.appendChild(b);
    }

    const $footer = document.createElement('footer');
    const $sp = document.createElement('span');
    const $text11 = document.createTextNode('Практику выполнил ... ');
    $sp.append($text11);
    $footer.append($sp);
    
    $footer.append(document.createElement('br'));
    
    const $sp1 = document.createElement('span');
    const $text12 = document.createTextNode('© ГБПОУ "Пермский краевой колледж "ОНИКС"');
    $sp1.append($text12);
    $footer.append($sp1);
    document.body.append($footer);
}