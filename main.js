ace.require("ace/ext/language_tools");

const options = {
  fontSize: "10pt",
  fontFamily: "Menlo, Monaco, 'Courier New', monospace",
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
}

let htmlEditor = ace.edit("htmlEditor");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setTheme("ace/theme/cloud_editor_dark");
htmlEditor.setShowPrintMargin(false);
htmlEditor.session.setTabSize(2);
htmlEditor.setOptions(options);

let cssEditor = ace.edit("cssEditor");
cssEditor.session.setMode("ace/mode/css");
cssEditor.setTheme("ace/theme/cloud_editor_dark");
cssEditor.setShowPrintMargin(false);
cssEditor.session.setTabSize(2);
cssEditor.setOptions(options);

let jsEditor = ace.edit("jsEditor");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setTheme("ace/theme/cloud_editor_dark");
jsEditor.setShowPrintMargin(false);
jsEditor.session.setTabSize(2);
jsEditor.setOptions(options);

function run() {
  document.querySelector('#outputWindow').innerHTML = '<iframe id="output"></iframe>';
  let output = document.getElementById("output").contentWindow.document;
  output.open();
  output.writeln(htmlEditor.getValue());
  output.writeln("<style>");
  output.writeln(cssEditor.getValue());
  output.writeln("</style>");
  output.writeln("<script>");
  output.writeln(jsEditor.getValue());
  output.writeln("</script>");
  output.close();
}

function changeEditor(type) {
  switch (type) {
    case 'html':
      document.querySelector('#htmlEditorBtn').classList.add('selectedEditor');
      document.querySelector('#htmlEditor').style.display = 'block';
      document.querySelector('#cssEditorBtn').classList.remove('selectedEditor');
      document.querySelector('#cssEditor').style.display = 'none';
      document.querySelector('#jsEditorBtn').classList.remove('selectedEditor');
      document.querySelector('#jsEditor').style.display = 'none';
      break;
    case 'css':
      document.querySelector('#htmlEditorBtn').classList.remove('selectedEditor');
      document.querySelector('#htmlEditor').style.display = 'none';
      document.querySelector('#cssEditorBtn').classList.add('selectedEditor');
      document.querySelector('#cssEditor').style.display = 'block';
      document.querySelector('#jsEditorBtn').classList.remove('selectedEditor');
      document.querySelector('#jsEditor').style.display = 'none';
      break;
    case 'js':
      document.querySelector('#htmlEditorBtn').classList.remove('selectedEditor');
      document.querySelector('#htmlEditor').style.display = 'none';
      document.querySelector('#cssEditorBtn').classList.remove('selectedEditor');
      document.querySelector('#cssEditor').style.display = 'none';
      document.querySelector('#jsEditorBtn').classList.add('selectedEditor');
      document.querySelector('#jsEditor').style.display = 'block';
      break;
  }
}

document.querySelector('#runBtn').addEventListener('mousedown', () => run());
document.querySelector('#htmlEditorBtn').addEventListener('mousedown', () => changeEditor('html'));
document.querySelector('#cssEditorBtn').addEventListener('mousedown', () => changeEditor('css'));
document.querySelector('#jsEditorBtn').addEventListener('mousedown', () => changeEditor('js'));