import { ChangeEvent, useState } from 'react';
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
 * no react os estados são as unicas coisas que vão mudar com alguma interação com o usuario
 * Toda vez que o valor do estado mudar o react vai renderizar todo a função
 * toLocaleLowerCase() : Deixando a busca case sensitivi
 * md:px-0 tirando o pd para desktop mas deixando no mobile
 */

interface Note { //Formato das informações
  id: string,
  date: Date,
  content: string
}

export function App() { // Componentes  = Funções que devolvem HTML

  const [seach, setSearch] = useState('') //busca
  const [notes, setNotes] = useState<Note[]>(() => { //Aqui vai ser onde a nota não vai sumir quando der f5
    const notesOnStorage = localStorage.getItem('notes');//Procurar no LocalStorage se eu tenho o intem notes

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage) //Se eu tiver vou retornar os intem do notesOnStorage
    }

    return []// Vai devolver o valor inicial
  })//Falo para o react que isso é um array que tera o formato de Note

  function onNoteCreated(content: string) { //fução para salvar a nota e mostrar
    const newNote = { // criando uma nova nota, mas com os mesmos conteudos
      id: crypto.randomUUID(), //Ira trazer um id unico para cada nota
      date: new Date(),
      content, // vai vir do parametro
    }

    const notesArray = [newNote, ...notes] //estou pegando todas as minhas notas, organizando por ordem e add a nova nota (newNote)

    setNotes(notesArray)
    localStorage.setItem('notes', JSON.stringify(notesArray))//o LOcal storage não le texto, então transformo em um JSON para facilitar na leitura// Aqui é para salvar as notas quando der f5 e elas não sumirem

  }

  function onNoteDeleted(id: string) {
    const notesArray = notes.filter(note => {
      return note.id !== id
    })

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) { //Fazendo a busca no input
    const query = event.target.value

    setSearch(query)
  }

  const filteredNotes = seach !== '' //Filtrando a busca
    ? notes.filter(note => note.content.toLocaleLowerCase().includes(seach.toLocaleLowerCase())) // Eu quero buscar o conteudo que inclui na busca
    : notes // buscar as notas normal

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <img src={Logo} alt='NLW Expert' />

      <form className='w-full'>
        <input
          type="text"
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500'
          onChange={handleSearch}
        />
      </form>
      <div className='h-px bg-slate-700'></div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]'>

        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map(note => { // o map vai percorrer todas as notas
          return <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />; // vai retornar um NoteCard com a nota em si e com os dados que edtão dentro do objeto // o key é do react e é para deixar mais perfemotica, pelo id que vou saber oq foi mudado
        })}

      </div>
    </div>
  )// Isso seria um JSX 
}

