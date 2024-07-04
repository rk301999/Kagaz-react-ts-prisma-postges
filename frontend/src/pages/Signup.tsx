
import Quote from '../components/Quote'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className='grid grid-rows-1 md:grid-cols-2 '>
      <SignupForm/>
      <Quote/>
    </div>
  )
}

export default Signup
