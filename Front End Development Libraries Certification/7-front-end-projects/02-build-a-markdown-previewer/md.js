console.log('hi')
console.log(marked.parse('separate file'));


const preview = document.querySelector("#preview");
const editorInput = document.querySelector("#editor");

console.log(editorInput);

preview.innerText = marked.parse('# hi there');
