import Logo from './assets/Logo.svg'; //<img src= { Logo }/>  aqui eu estou pegando a minha Logo que é um,a variavel que foi importada
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';
/**
 * No React não pode colocar elementos HTML sem alguma coisa em Volta
 * <div></div> 
 * para pegar as medidas no tailwindd pegar o Px e dividir por 4
 * 
 * outline - para ver as coisas na tela - tipo o border
 * sempre que colocar o : no tailwindd, quer dizer que vai funcionar apenas para esse elemento
 * hp-px = para colocar 1px
 * from-black/60 = o / é para controlar a opacidade da cor
 * overflow-hidden = esconder as coisas
 */

export function App() { // Componentes  = Funções que devolvem HTML
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo} alt='NLW Expert' />

      <form className='w-full'>
        <input
          type="text"
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500'
        />
      </form>
      <div className='h-px bg-slate-700'></div>

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>

        <NewNoteCard />
        <NoteCard note={{ // Um objeto para falar sobre os dados das notas
            date: new Date(),
            content: 'Hello, world'
          }} />
      </div>
    </div>
  )// Isso seria um JSX 
}

