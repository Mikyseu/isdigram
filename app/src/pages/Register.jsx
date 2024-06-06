import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Register({ onUserRegistered, onLoginClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, birthdate, email, username, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => showFeedback(error.message, 'error'))
        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    logger.debug('Register -> render')

  return (
    <main className="my-[50px] px-[5vw]">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" type="text" id="name" />

        <label htmlFor="birthdate">Age</label>
        <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" type="date" id="birthdate" />

        <label htmlFor="email">E-mail</label>
        <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" type="email" id="email" />

        <label htmlFor="username">Username</label>
        <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" id="username" />

        <label htmlFor="password">Password</label>
        <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" type="password" id="password" />

        <button className="rounded-[5px] border-[1px] p-1.5 bg-[#F7C566]  inline-block min-w-auto mt-[8px]"  type="submit">
          Register
        </button>
      </form>

      <a href="" onClick={handleLoginClick}>
        Login
      </a>
    </main>
  );
}

export default Register;
