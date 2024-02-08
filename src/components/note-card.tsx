import * as Dialog from '@radix-ui/react-dialog' // importando o modelo Diolog do Radix o * é para importar todos os componentes
import { formatDistanceToNow } from 'date-fns' //Formantando a data
import { ptBR } from 'date-fns/locale' //usando o formato BR
import { X } from 'lucide-react' //iconde de fechar a nota

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
     */

interface NoteCardProps { // quais são as PROPRIEDADES que o notes card pode receber// Vai ser passada em App no objeto
    note: {
        date: Date
        content: string
    }
}
export function NoteCard({ note }: NoteCardProps) { // Exportando o modelo das notas
    
    return (
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md text-left flex-col outline-none bg-slate-800 p-5 gap-3 overflow-hidden relative hover:ring-2 
            hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-600'>
                <span className='text-sm  font-medium text-slate-300'>
                    {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                </span>

                <p className='text-sm leading-6 text-slate-400'>
                    {note.content}
                </p>
                <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60' />
                <Dialog.Content className='overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] max-w-[640px] w-full
                 bg-slate-700 rounded-md flex flex-col outline-none'>
                    <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
                        <X className='size-5' />
                    </Dialog.Close>

                    <div className='flex flex-1 flex-col gap-3 p-5'>
                        <span className='text-sm  font-medium text-slate-300'>
                            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                        </span>

                        <p className='text-sm leading-6 text-slate-400'>
                            {note.content}
                        </p>
                    </div>

                    <button
                        type='button'
                        className='w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group'
                    >
                        Deseja <span className='text-red-400 group-hover:underline'>apagar essa nota</span>?
                    </button>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}