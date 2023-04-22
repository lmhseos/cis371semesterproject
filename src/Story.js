import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const style = {
  li: `flex justify-between bg-white-700 p-4 capitalize text-white`,
  liComplete: `flex justify-between bg-slate-700 p-4 capitalize text-white`,
  row: `flex`,
  text:`ml-2  `,
  done: `ml-2  line-through`,
  addButton: ` flex item-center`,
}
export const Story = ({story, Ifcomplete, deletestory}) => {
  return (
    <div>
      <li className={story.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={() => Ifcomplete(story)} type="checkbox" checked={story.completed ? 'checked' : '' } />
            <p onClick={() => Ifcomplete(story)} className={story.completed ? style.done : style.text }>{story.name} {story.priority} {story.description} </p>
        </div>   
          <addButton onClick={() => deletestory(story.id)}>{<FaTrashAlt/>}</addButton>        
    </li>
    </div>
  )
}

export default Story;