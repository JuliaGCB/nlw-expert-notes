export function NoteCard() { // Exportando o modelo das notas
    /**
     * ring-2 - como se fosse uma borda, mas é um box-shadow
     * focus-visible = é para ficar no estado de Focado com o Tab 
     */
    return (
        <button className='rounded-md text-left outline-none bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 
        hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-600'>
            <span className='text-sm  font-medium text-slate-300'>
                há 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic aperiam sint iste ea accusamus quo, accusantium, porro, quos vel pariatur aspernatur vero optio ad illum nobis aliquam nihil ullam vitae.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi iusto perferendis magni, id architecto vero, sunt impedit soluta maxime accusamus totam omnis, velit qui. Maxime itaque soluta fugit temporibus ipsam!
            </p>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </button>
    )
}