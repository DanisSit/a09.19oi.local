const $block = document.createElement('div');
const $sag = document.createElement('h2');
$block.append($sag);
const $text = document.createTextNode('Lorem ipsum');
$sag.append($text);

const $sag1 = document.createElement('h3');
$block.append($sag1);
const $text1 = document.createTextNode('Dolor sit amet');
$sag1.append($text1);
$block.append($sag1);

const $cont = document.createElement('p');
$block.append($cont);
const $text2 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sem a ligula sagittis, ac finibus mauris aliquet. ');
$cont.append($text2);
$block.append($cont);

const $sag2 = document.createElement('h3');
$block.append($sag2);
const $text3 = document.createTextNode('Aliquam eleifend');
$sag2.append($text3);
$block.append($sag2);

const $cont1 = document.createElement('p');
$block.append($cont1);
const $text4 = document.createTextNode('Aliquam eleifend consequat purus, a tincidunt odio vehicula eget. Sed sollicitudin, urna vitae elementum iaculis, leo tellus tristique tortor, quis condimentum justo sem sit amet sem. Fusce mattis metus metus, sed egestas tellus faucibus quis. ');
$cont1.append($text4);
$block.append($cont1);

const $sag3 = document.createElement('h3');
$block.append($sag3);
const $text5 = document.createTextNode('Nunc a ante feugiat');
$sag3.append($text5);
$block.append($sag3);

const $cont2 = document.createElement('p');
$block.append($cont2);
const $text6 = document.createTextNode('Nunc a ante feugiat, hendrerit nunc sed, tristique ipsum. In hac habitasse platea dictumst. Etiam dapibus mattis nulla a consequat. Phasellus nec nunc et dui condimentum tristique. ');
$cont2.append($text6);
$block.append($cont2);

const $sag4 = document.createElement('h3');
$block.append($sag4);
const $text7 = document.createTextNode('Ut consequat auctor enim et dictum');
$sag4.append($text7);
$block.append($sag4);

const $cont3 = document.createElement('p');
$block.append($cont3);
const $text8 = document.createTextNode('Ut consequat auctor enim et dictum. Maecenas venenatis et diam porta egestas. Suspendisse id erat lorem. Aenean consequat magna vitae eleifend accumsan. Suspendisse rhoncus pulvinar interdum. Aliquam vitae diam sed massa fermentum elementum.');
$cont3.append($text8);
$block.append($cont3);

const $sag5 = document.createElement('h3');
$block.append($sag5);
const $text9 = document.createTextNode('Sed ultricies mauris quam');
$sag5.append($text9);
$block.append($sag5);

const $cont4 = document.createElement('p');
$block.append($cont4);
const $text10 = document.createTextNode('Sed ultricies mauris quam, vel feugiat leo iaculis vitae. Donec nulla ex, maximus ac dapibus posuere, sagittis at nisi.');
$cont4.append($text10);
$block.append($cont4);

document.body.append($block);

const $footer = document.createElement('div');
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
