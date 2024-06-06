import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Login({ onUserLoggedIn, onRegisterClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', username, password)

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => showFeedback(error.message, 'error'))
        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    logger.debug('Login -> render')

  return <main className="my-[50px] px-[5vw]">
      <h1 className="flex justify-center">Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" id="username" />

        <label htmlFor="password">Password</label>
        <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" type="password" id="password" />

        <button  className="rounded-[5px] border-[1px] p-1.5 bg-[#F7C566]  inline-block min-w-auto mt-[8px]" type="submit">
          Login
        </button>
      </form>

      <a href="" onClick={handleRegisterClick}>
        Register
      </a>
    </main>
  
}

export default Login;
