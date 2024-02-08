import * as Dialog from '@radix-ui/react-dialog' // importando o modelo Diolog do Radix o * é para importar todos os componentes
import { X } from 'lucide-react' //icon de fechar a nota
import { ChangeEvent, FormEvent, useState } from 'react'
import {toast} from 'sonner' // Importando a função do sonner para mostrar um aviso

/**
     * ring-2 - como se fosse uma borda, mas é um box-shadow
     * focus-visible = é para ficar no estado de Focado com o Tab
     * Eu coloco o NoteCardProps como uma propriedade dentro do NoteCard, usando o props.
     * Dialog.Trigger = Vai abrir o modal
     * Dialog.Portal = o conteudo esteja dentro dele, não seja exatamente mostrado no local onde estou colocando ele
     * Dialog.Overlay = è o modal, a camada preta que fica por cima do conteudo
     * no Tailwindd, se quiser que a estilização faça o contrario é so colocar um - 
     * -translate-x-1/2 -translate-y-1/2 : hack para deixar o conteudo 100% no centro da tela
     * {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}  // Formatando a Data para aparecer do jeito Br
     * addSuffix : Mostra um pre-fixo : Há 2 minutos
     * group: criando um grupo para poder estilizar apenas algumas coisas expeficicas dentro do elemento pai
     * 
     * No React um Estado não tem como so trocar o estado dele
     * 
     */

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true) //O estado para quando clicar no 'use apenas texto' sumir
  const [content, setContent] = useState('')
  //Aqui eu vou estar chamando a variavel setShouldShowOnboarding para poder trocar o estado dela para False, pois no react não posso apenas trocar o valor da variavel
  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) { //para caso eu apague o conteudo da nota, voltar para a pagina anterior// event: ChangeEvent<HTMLTextAreaElement> é para falar que o valor que sera guardado pelo value sera um HTML do textarea

    setContent(event.target.value) //Cada vez que o usuario digitar alguma coisa no textarea, vai atualizar o valor o estado content, com o valor digitado pelo usurio// Aqui já esta salvando

    if (event.target.value == "") { // Se o meu event.target.value for igual a vazio, eu vou trocar meu setShouldShowOnboarding para verdadeiro
      setShouldShowOnboarding(true)
    }
  }

  function handleSaveNote(event: FormEvent) { //Aqui eu fiz para quando clicar em salvar, não fechar a aba
    event.preventDefault()
    console.log(content)

    toast.success('Nota criada com sucesso')
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger className='rounded-md text-left flex-col outline-none bg-slate-800 p-5 gap-3 overflow-hidden relative hover:ring-2 
            hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-600'>
        <span className='text-sm  font-medium text-slate-200'>
          Adicionar nota
        </span>
        <p className='text-sm leading-6 text-slate-400'>
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/60' />
        <Dialog.Content className='overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] max-w-[640px] w-full
                 bg-slate-700 rounded-md flex flex-col outline-none'>
          <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
            <X className='size-5' />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className='flex-1 flex flex-col '>
            <div className='flex flex-1 flex-col gap-3 p-5'>
              <span className='text-sm  font-medium text-slate-300'>
                Adicionar nota
              </span>

              {shouldShowOnboarding ? ( // Isso é um IF, que fala assim, quando clicar no botão 'utilize..' mudar para uma TextArea
                <p className='text-sm leading-6 text-slate-400'>
                  Comece <button className='font-medium text-lime-500 hover:underline'> granvando uma nota</button> em áudio ou se preferir <button
                    onClick={handleStartEditor} className='font-medium text-lime-500 hover:underline'>utilize apenas texto</button>.

                </p>
              ) : (
                <textarea
                  autoFocus
                  className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                  onChange={handleContentChanged}
                />
              )}
            </div>

            <button
              type='submit'
              className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500'
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}