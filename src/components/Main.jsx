import GameMenu from './GameMenu'
import GameWindow from './GameWindow'
import Keyboard from './Keyboard'
import ModalLose from './ModalLose'
import ModalWin from './ModalWin'

const Main = () => {
  return (
    <main className='m-auto py-6 flex flex-col gap-6 xl:items-center xl:flex-row'>
      <section className='flex place-content-center items-center flex-col gap-4 min-w-[300px] '>
        <GameMenu />
        <GameWindow />
      </section>
      <section>
        <Keyboard />
      </section>
      <ModalWin />
      <ModalLose />
    </main>
  )
}

export default Main
