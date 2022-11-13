import LEGEND_LANG from '../language/legendLang'
import useLanguage from '../hooks/useLanguage'

const Legend = () => {
  const { language } = useLanguage()
  return (
    <section className='flex gap-2'>
      <div className='flex gap-1 items-center'>
        <div className='aspect-square w-8 rounded-md border-2 grid place-content-center text-black'>
          A
        </div>
        <small>{LEGEND_LANG.available[language]}</small>
      </div>
      <div className='flex gap-1 items-center'>
        <div className='aspect-square w-8 opacity-30 grid place-content-center rounded-md border-2'>
          A
        </div>
        <small>{LEGEND_LANG.already_used[language]}</small>
      </div>
    </section>
  )
}

export default Legend
