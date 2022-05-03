const preview = document.querySelector("#preview");
const editorInput = document.querySelector("#editor");

const updatePreview = () => {
  const editorInputValue = editorInput.value;
  preview.innerHTML = marked.parse(editorInputValue);
};

editorInput.addEventListener("keyup", updatePreview);

//onload actions:
const defaultEditorValue = `\
Welcome to my Editor, start editing below:

# h1 example
## h2 example
[click to go to youtube](http://www.youtube.com)

\` example of inline code\`

\`\`\`
function codeBlock() {
  let codeExample = 'hello ice cream';
  return codeExample;
}
\`\`\`

- example
- of 
- a 
- list

> example of block quote

### picture of a cute ice cream
![ice cream pic](https://i.quotev.com/img/q/u/17/9/15/o3h2jozbyq.jpg)

**bold example text**
`;

const defaultEditor = () => {
  editorInput.value = defaultEditorValue;
  preview.innerHTML = marked.parse(editorInput.value);
};

window.onload = defaultEditor;
