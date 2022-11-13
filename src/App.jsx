import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import LanguageContextProvider from './context/LanguageContext.jsx'
import GameContextProvider from './context/GameContext.jsx'

const App = () => {
  return (
    <LanguageContextProvider>
      <GameContextProvider>
        <div className='min-h-screen overflow-x-hidden w-screen grid grid-rows-[70px_1fr_70px]'>
          <Header />
          <Main />
          <Footer />
        </div>
      </GameContextProvider>
    </LanguageContextProvider>
  )
}

export default App
