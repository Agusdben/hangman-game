import useLanguage from '../hooks/useLanguage'
import FOOTER_LANG from '../language/footerLang'

const Footer = () => {
  const { language } = useLanguage()
  return (
    <footer className='flex flex-col gap-2 items-center'>
      <section>
        <p>
          {FOOTER_LANG.created_by[language]}{' '}
          <span className='text-slate-800 font-bold'>Agustin Di Benedetto</span>
        </p>
      </section>
      <section className='flex gap-2 [&_a]:hover:text-slate-800 [&_a]:font-bold'>
        <a
          href='https://www.linkedin.com/in/agustin-di-benedetto-7509071ba/'
          target='_blank'
          rel='noreferrer'
        >
          Linkedin
        </a>
        <span>|</span>
        <a href='https://github.com/Agusdben' target='_blank' rel='noreferrer'>
          Github
        </a>
      </section>
    </footer>
  )
}

export default Footer
