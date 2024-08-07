
import { useRef, useState } from 'react'
import styles from './EmailEditor.module.scss'
import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import  {applyStyle, TStyle}  from './apply-style.ts'
import parse from 'html-react-parser'
export function EmailEditor() {
   const [text, setText] = useState(`Hey
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet porro, ducimus necessitatibus, sapiente aliquid vero minima deserunt nostrum, sint error eveniet facere iusto corporis id labore officiis et excepturi nihil!`)
        const [selectionStart, setSelectionStart] = useState(0)
        const [selectionEnd, setSelectionEnd] = useState(0)

   const textRef= useRef<HTMLTextAreaElement | null>(null)  
   
   const updateSelection =() => {
        if (!textRef.current) return
        setSelectionStart(textRef.current.selectionStart)
        setSelectionEnd(textRef.current.selectionEnd)
      }  
   const applyFormat = (type: TStyle ) =>{
    const selectedText = text.substring(selectionStart, selectionEnd)  
    //if(!textRef.current) return
          
    //  const cursorStart = textRef.current?.selectionStart;
    //  const cursorEnd =  textRef.current?.selectionEnd;

      
      if(!selectedText) return
      const before = text.substring(0, selectionStart)
      
      const after = text.substring(selectionEnd)
      setText(before + applyStyle(type, selectedText) + after);
     
    }
    return (
   
    <div>
      <h1>Email edditor</h1>
      <div className={styles.card}>
        <textarea 
        ref ={textRef}
        contentEditable 
        className={styles.editor} 
        spellCheck = 'false'
        onSelect={updateSelection}
        value = {text}
        onChange={e => setText(e.target.value)}
        />
       
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}><Eraser /></button>
            <button onClick={() => applyFormat('bold')}><Bold /></button>
            <button onClick={() => applyFormat('italic')}><Italic /></button>
            <button onClick={() => applyFormat('underline')}><Underline /></button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  )
}


