import { EmailEditor } from "../../components/email-editor/EmailEditor";
import { EmailList } from "../../components/email-list/EmailList.tsx";

export function Home(){
   return (
      <div
      style={{
         display: 'grid',
         gridTemplateColumns: '1fr .6fr',
         padding: '1.6rem',  
         }}
         >
            <EmailEditor />
            <div className="email-list">
            <EmailList  />   
            </div>
            
         </div>
     
   )
}