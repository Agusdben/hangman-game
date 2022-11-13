import React from 'react'
import Modal from './Modal'

const ModalClue = ({ title, open, handleModal, clue }) => {
  return (
    <Modal title={title} open={open} onClose={handleModal}>
      <div>
        <p className='m-o'>{clue}</p>
      </div>
    </Modal>
  )
}

export default ModalClue
