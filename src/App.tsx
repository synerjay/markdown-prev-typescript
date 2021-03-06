import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [inputValue, setInputValue] = useState(placeholder);
  const editorValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  // Single Window Mode
  const [singleWindowMode, setSingleWindowMode] = useState(false);

  const singleWindowStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
    justifyContent: undefined,
    alignItems: undefined,
  };

  // Show Editor State
  const [showEditor, setShowEditor] = useState(true);

  const maximizeEditor = () => {
    setSingleWindowMode(true);
    setShowPreviewer(false);
  };

  const minimizeEditor = () => {
    setSingleWindowMode(false);
    setShowPreviewer(true);
  };

  // Show Previewer State
  const [showPreviewer, setShowPreviewer] = useState(true);

  const maximizePreviewer = () => {
    setSingleWindowMode(true);
    setShowEditor(false);
  };

  const minimizePreviewer = () => {
    setSingleWindowMode(false);
    setShowEditor(true);
  };

  const maximizeWindowStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
  };

  return (
    <div
      className='App'
      style={singleWindowMode ? singleWindowStyle : undefined}
    >
      {showEditor && (
        <Editor
          input={inputValue}
          editorValueChange={editorValueChange}
          minimizeOnClick={
            !singleWindowMode ? maximizePreviewer : minimizeEditor
          }
          resizeWindow={singleWindowMode ? minimizeEditor : maximizeEditor}
          addStyles={
            showEditor && singleWindowMode ? maximizeWindowStyle : undefined
          }
        />
      )}
      {showPreviewer && (
        <Preview
          input={inputValue}
          minimizeOnClick={
            !singleWindowMode ? maximizeEditor : minimizePreviewer
          }
          resizeWindow={
            singleWindowMode ? minimizePreviewer : maximizePreviewer
          }
          addStyles={
            showPreviewer && singleWindowMode ? maximizeWindowStyle : undefined
          }
        />
      )}
    </div>
  );
}

export default App;

const placeholder = `
# Markdown Previewer App
Hi! I'm Jerome and welcome to my Markdown Previewer App!
A markdown previewer is an app that parses markdown code into HTML styles. 
Try it out yourself! 
# How to Use
On the editor panel, type in the markdown code that you want to see on the preview panel on the right.
Try the markdown code below to check it out! 
**To get a bolded text, type in these asterisks**
> An arrow key character makes block Quotes!
> You can have several lines of these
> As many as you can!
> As many as you want!
> Isn't it cool?
To make a heading, try the sharp key as so!
# Heading
## Heading 2
### Heading 3
To make bullet points, it's as simple as: 
- One!
- Two! 
- Three!
- Easy, right?
You can even include images like these from the internet! Wow! 
![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)
To include programming code, try typing these: \`<div></div>\`
If you want to include mulitple lines, you can do so by doing these: 
\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`
I hope you learn something about the fun things you can do with Markdown! If you enjoyed, please visit  [my Github](https://synerjay.github.com)
`;
