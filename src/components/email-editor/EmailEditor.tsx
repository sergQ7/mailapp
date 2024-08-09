
import { useRef, useState } from 'react'
import styles from './EmailEditor.module.scss'
import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import  {applyStyle, TStyle}  from './apply-style.ts'
import parse from 'html-react-parser'
import { emailService } from '../../services/email.service.tsx'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EmailList } from '../email-list/EmailList.tsx'
export function EmailEditor() {
  
   const [text, setText] = useState('')
        const [selectionStart, setSelectionStart] = useState(0)
        const [selectionEnd, setSelectionEnd] = useState(0)

   const textRef= useRef<HTMLTextAreaElement | null>(null)  
   const queryClient = useQueryClient()
   const {mutate, isPending} = useMutation({
    mutationKey:['create email'],
    mutationFn:() => emailService.sendEmails(text),
    onSuccess: () =>{
      setText(' ')
      queryClient.refetchQueries({queryKey: ['email list']})
    }
  })
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
   
    <div className={styles.container}>
      <div className={styles.editorContainer}>
      <h1>Email edditor</h1>
      {/*{text && <div className={styles.preview}>{parse(text)} </div>}*/}
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
          <button disabled={isPending} onClick={() => mutate()}>Send now</button>
        </div>
      </div>
    </div>
    <div className={styles.emailListContainer}>
     <EmailList />
     </div>
     </div>
  )
}




