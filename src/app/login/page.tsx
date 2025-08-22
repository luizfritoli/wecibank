import LoginCard from "../components/LoginCard/LoginCard"
import { getUsers } from "@/lib/account"

const Page = () => {
  return (
    <section className='d-flex justify-content-center align-items-center vh-100'>
      <LoginCard />
    </section>
  )
}

export default Page
