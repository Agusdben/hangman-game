import Portal from '../Portal'

const Modal = ({ children, onClose, open, title = '' }) => {
  return (
    <Portal elementID='modal'>
      {open && (
        <div className='fixed top-0 left-0 w-screen h-screen grid place-content-center'>
          <div className='min-w-[300px] rounded-md bg-white relative z-10 overflow-hidden'>
            <header className='bg-slate-800 text-white flex justify-between items-center px-4 py-2 capitalize'>
              <h2 className='text-xl'>{title}</h2>
              <button
                type='button'
                className='rounded-full bg-white aspect-square w-6 text-slate-800'
                onClick={onClose}
              >
                <span className='gird place-content-center'>X</span>
              </button>
            </header>
            <div className='px-4 py-2'>{children}</div>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='absolute cursor-default top-0 left-0 w-screen h-screen bg-black opacity-60'
          />
        </div>
      )}
    </Portal>
  )
}

export default Modal
