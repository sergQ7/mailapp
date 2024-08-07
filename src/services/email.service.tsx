import axios from "axios"
import { IEmail } from "../pages/home/types";

class EmailService{
   [x: string]: any;
   private URL = 'http://localhost:3000/emails'
   async getEnails(){
      const {data} =  await axios.get<IEmail[]>(this.URL)
      return data;
   }
   async sendEmails({text}: {text: string}){
      const {data} =  await axios.post(this.URL, {
         text,
      })
      return data;
   }
}
export const emailService = new EmailService