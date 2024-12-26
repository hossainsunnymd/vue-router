import {reactive} from 'vue'

 const users=reactive({
    data:JSON.parse(localStorage.getItem('users')) || [],
    loggin: false
   
 })



 export default users