export const emailValidator = email =>{
   const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
   console.log(emailRegex.test(email))
   return emailRegex.test(email)
}
