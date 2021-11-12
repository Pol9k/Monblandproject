const reportsInner = document.getElementById('reports-inner');
const btnLine = document.getElementById('line-btn');
const btnColumn = document.getElementById('column-btn');

btnLine.addEventListener('click', _ => {
  reportsInner.classList.add('line');

  btnLine.classList.add('reports-mark-active');
  btnColumn.classList.remove('reports-mark-active');
});

btnColumn.addEventListener('click', _ => {
  reportsInner.classList.remove('line');

  btnColumn.classList.add('reports-mark-active');
  btnLine.classList.remove('reports-mark-active');
});



