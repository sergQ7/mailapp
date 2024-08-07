import axios from "axios"
//import { IEmail } from "../pages/home/types";
import { useQueries } from '@tanstack/react-query'
import styles from './EmaiList.module.scss'
import { emailService } from '../../services/email.service.tsx'
interface Email{
   text: string;
}
export function EmailList(){
   const [queryResult] = useQueries({
      queryKey: ['email list'],
      queryFn: () => emailService.getEmails(),
   })
   const {data} = queryResult;
   return (<div className={styles.list}>
      {data?.map((email: Email) => ( 
            <div key={email.text}>{email.text}</div>
            ))}
      
      
      </div>
   )
}