import { logger } from '../utils'

import CancelButton from './library/CancelButton'

import logic from '../logic'
import SubmitButton from './library/SubmitButton'

import { useContext } from '../context'

// import './CreatePost.sass'

function CreatePost({ onPostCreated, onCancelClick }) {
   const { showFeedback } = useContext()
   
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => {
                    form.reset()

                    onPostCreated()
                })
                .catch(showFeedback)
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleCancelClick = () => onCancelClick()

    logger.debug('CreatePost -> render')

    return <section className="mb-[50px] fixed bottom-0 left-0 bg-white w-full box-border p-[5vw]">
        <form onSubmit={handleSubmit} className="flex flex-col ">
            <label>Image</label>
            <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" id="image" type="text" />

            <label>Text</label>
            <input className="shadow	0 4px 6px -1px rgb(0 0 0 / 0.1) bg-[#F6F5F2]" id="text" type="text" />

            <SubmitButton>Create</SubmitButton>
        </form>

        <CancelButton onClick={handleCancelClick} />
    </section>
}

export default CreatePost