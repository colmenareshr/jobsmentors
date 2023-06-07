import React from 'react'
import { IoMdClose } from 'react-icons/io'

interface ModalProps {
  children: React.ReactNode
  title: string
  closeModal: (value: boolean) => void
  openModal: boolean
}

const Modal = ({ children, title, closeModal, openModal }: ModalProps) => {
  return (
    <>
      {openModal && (
        <div className="fixed left-0 top-0 flex h-[100vh] w-[100vw] items-center justify-center bg-black/50 p-10 backdrop-blur-md">
          <div className="relative mx-auto min-h-[100px] w-[500px] rounded-md bg-white p-10 shadow-inner">
            <div className="mb-5 flex items-center  justify-between border-b border-teal400 pb-5">
              <span className="text-lg font-bold">{title}</span>
            </div>
            <IoMdClose
              onClick={() => closeModal(false)}
              size={30}
              className="absolute right-5 top-8 cursor-pointer rounded-full p-1 transition-all duration-75 ease-in-out hover:bg-sky/30"
            />
            <div className="text-center">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
