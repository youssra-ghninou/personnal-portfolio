import { IoMdSend } from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center  dark:text-white transition duration-500'>
        <div className=' pb-4 rounded-xl w-[320px]'>
          <form
            className='mt-12'
            action='https://api.web3forms.com/submit'
            method='POST'
          >
            <input
              type='hidden'
              name='access_key'
              value='744d56a8-ac1a-4697-9df7-8c2542ff6716'
            />
            <div className='relative'>
              <input
                id='Name'
                required
                name='Name'
                type='text'
                className='bg-transparent rounded-lg pl-2 peer h-10 w-full border-2 border-gray-300 dark:text-white text-gray-900 placeholder-transparent focus:outline-none focus:border-brand'
                placeholder='Name'
              />
              <label
                htmlFor='Name'
                className='dark:peer-focus:bg-dark absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-semibold peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-gray-600 peer-focus:text-sm'
              >
                Name
              </label>
            </div>
            <div className='mt-10 relative'>
              <input
                id='email'
                required
                type='text'
                name='email'
                className='bg-transparent rounded-lg peer pl-2 h-10 w-full border-2 border-gray-300 dark:text-white text-gray-900 placeholder-transparent focus:outline-none focus:border-brand'
                placeholder='email'
              />
              <label
                htmlFor='email'
                className='dark:peer-focus:bg-dark absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-semibold peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-gray-600 peer-focus:text-sm'
              >
                Email
              </label>
            </div>
            <div className='mt-10 relative'>
              <textarea
                id='Message'
                rows='9'
                required
                type='message'
                name='message'
                className='bg-transparent rounded-lg peer pl-2 pt-2 w-full border-2 dark:text-white border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand'
                placeholder='Message'
              />
              <label
                htmlFor='Message'
                className='dark:peer-focus:bg-dark absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-semibold peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-gray-600 peer-focus:text-sm'
              >
                Message
              </label>
            </div>
            <input
              type='hidden'
              name='redirect'
              value='https://web3forms.com/success'
            />
            <div className='flex w-fit mx-auto px-2 dark:text-grey text-dviolet flex-row items-center justify-center pt-8 gap-1 text-lg font-bold border-b-2 border-brand'>
              <IoMdSend />
              <button type='submit'>send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact