import { useState } from "react"
import imageRulesBonus from "../../images/image-rules-bonus.svg"
import iconClose from "../../images/icon-close.svg"

const Rules = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button
        className="border-2 border-headerOutline fixed bottom-8 right-8 tracking-widest uppercase px-9 py-3 sm:rounded-lg text-white hover:brightness-75 transition-all"
        onClick={() => setModalOpen(true)}
      >
        rules
      </button>
      {modalOpen && (
        <div className="fixed flex items-center justify-center w-full h-full backdrop-brightness-50 z-20">
          <div className="bg-white px-8 pt-24 sm:pt-8 pb-16 sm:pb-12 sm:rounded-xl flex flex-col gap-4 w-full h-full sm:w-auto sm:h-auto ">
            <div className="flex sm:justify-between justify-center items-center">
              <h1 className="text-4xl text-darkText font-bold">RULES</h1>
              <button
                className="hover:brightness-75 transition-all hidden sm:block"
                onClick={() => setModalOpen(false)}
              >
                <img src={iconClose} />
              </button>
            </div>
            <div className="my-auto">
              <img src={imageRulesBonus} />
            </div>
            <div className="flex items-center justify-center sm:hidden">
              <button
                className="hover:brightness-75 transition-all"
                onClick={() => setModalOpen(false)}
              >
                <img src={iconClose} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Rules
