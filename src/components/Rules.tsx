import { useState } from "react"
import imageRulesBonus from "../../images/image-rules-bonus.svg"
import iconClose from "../../images/icon-close.svg"

const Rules = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button
        className="border-2 border-headerOutline fixed bottom-8 right-8 tracking-widest uppercase px-9 py-3 rounded-lg text-white"
        onClick={() => setModalOpen(true)}
      >
        rules
      </button>
      {modalOpen && (
        <div className="fixed flex items-center justify-center w-full h-full backdrop-brightness-50">
          <div className="bg-white px-8 pt-8 pb-12 rounded-xl flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl text-darkText font-bold">RULES</h1>
              <button onClick={() => setModalOpen(false)}>
                <img src={iconClose} />
              </button>
            </div>
            <img src={imageRulesBonus} />
          </div>
        </div>
      )}
    </>
  )
}

export default Rules
