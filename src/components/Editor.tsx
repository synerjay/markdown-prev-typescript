import React from 'react';

interface EditorProps {
  editorValueChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  input: string;
  resizeWindow(): void;
  minimizeOnClick(): void;
  addStyles?: React.CSSProperties;
}

function Editor({
  editorValueChange,
  input,
  resizeWindow,
  minimizeOnClick,
  addStyles,
}: EditorProps) {
  return (
    <div className='window' style={addStyles}>
      <div className='top-bar'>
        <div className='window-action'>
          <ul>
            <li onClick={minimizeOnClick}></li>
            <li onClick={minimizeOnClick}></li>
            <li onClick={resizeWindow}></li>
          </ul>
        </div>
        <div className='editor-text'>EDITOR</div>
      </div>
      <div className='screen'>
        <textarea
          className='Editor'
          value={input}
          onChange={(e) => editorValueChange(e)}
        />
      </div>
    </div>
  );
}

export default Editor;
