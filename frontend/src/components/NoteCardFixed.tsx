import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'

interface NoteCardProps {
  id: number
  title: string
  content: string
}

const NoteCardFixed = (props : NoteCardProps) => {

  const handleDelete = async (e, id) => {

    e.preventDefault()

    if(!window.confirm("Are you sure you want to delete this note?")) {
      return
    }


    
  }



  return (
    <Link to ={`/note/${props.id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'>
      <div className='card-body'>
        <h3 className='card-title text-base-content'>{props.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{props.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
          <div className='flex items-center justify-between gap-1'>
            <PenSquareIcon className='size-4' />
            <button onClick={(e) => handleDelete(e, props.id)}>
              <Trash2Icon className='size-4' />
            </button>
          </div>
        </div>
      </div>

    </Link>

  )
}

export default NoteCardFixed