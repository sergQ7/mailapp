import axios from "axios"
import { IEmail } from "../../pages/home/types.ts";
import { useQueries } from '@tanstack/react-query'
import styles from './EmaiList.module.scss'
import { emailService } from '../../services/email.service.tsx'
import parse from 'html-react-parser'
interface Email{
   text: string;
}
export function EmailList(){
   const [{data}]  = useQueries({
      queries: [{
      queryKey: ['email list'],
      queryFn: () => emailService.getEmails(),
      }],
   })
   
   return (<div className={styles.list}>
      {data?.map((email: Email) => ( 
            <div key={email.text}>{parse(email.text)}</div>
            ))}
      
      
      </div>
   )
}