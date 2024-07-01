import { redirect } from "react-router-dom"


const ProtectedRoute = ({children } : { children: React.ReactNode}) => {

  if(!localStorage.getItem("accessToken")){
    redirect("/");
    return;
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute