// Conditional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Non-null assertion(!)
const html = document.querySelector('html')!; // ! no final diz que o elemento não pode ser null *Não Recomendado*
html.style.background = 'red';

// Type assertion
const html1 = document.querySelector('html') as HTMLHtmlElement;
html1.style.background = 'red';

const body1 = document.querySelector('body') as HTMLBodyElement;
body1.style.background = 'red';
