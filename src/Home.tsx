import { EmailEditor } from "./components/email-editor/EmailEditor.tsx";
//import { EmailList } from "./components/email-list/EmailList.tsx";
export function Home() {
return(
      <div style={{
         display: "fgrid",
         gridTemplateColumns: "1fr .6fr",
         padding: '1.5rem', }}>
      <EmailEditor />
      {/*<EmailList />*/}
      </div>
   );
}
   
