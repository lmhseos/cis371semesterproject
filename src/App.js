//import { collection } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { Story } from './Story';
import { db } from './firebase';
import { collection, query, onSnapshot, updateDoc, doc, addDoc, deleteDoc, } from 'firebase/firestore';



const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#647DEE] to-[#7F53AC]`,
  container: `bg-slate-700 max-w-[1000px] w-full m-auto shadow-xl p-4`,
  heading: `text-5xl font-bold text-center text-white p-2`,
  form: `flex justify-between`,
  name: `border p-2 max-w-[200] text-xl `,
  description:`border p-2 w-full text-xl`,
  priority:`border p-2 max-w-[90px] text-xl`,
  addbutton: `border p-4 bg-gray-600 text-slate-200 `,
  statbutton: `border p-4 bg-gray-600 text-slate-200 `,
  sortbutton: `border p-4 bg-gray-600 text-slate-200 `,
  loginbutton: `border p-4 ml-2 bg-gray-600 text-slate-200 `,
  count: `text-center p-2 text-white`

}

function App() {
  const [stories, setStories] = useState([]);
  const [name, setName] = useState([]);
  const [priority, setPriority] = useState([]);
  const [descrip, setDescrip] = useState([]);

  useEffect(()=> {
    const q = query(collection(db, 'stories'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let storiestemp = []
      querySnapshot.forEach((doc) => {
        storiestemp.push({...doc.data(), id: doc.id})
      });
     setStories(storiestemp)
    })
    return unsubscribe
  }, [])


  const Ifcomplete = async (story) => {
    await updateDoc(doc(db, 'stories', story.id), {
      completed: !story.completed
  })
}

const createNewStory = async (e) => {  
    e.preventDefault(e)
    await addDoc(collection(db, 'stories'), {
      name: name,
      priority: priority,
      description: descrip,
      completed: false,
})
setName('')
setPriority('')
setDescrip('')
};


async function deleteStoryById(storyId) {
  const storyRef = doc(db, 'stories', storyId);

  await deleteDoc(storyRef);
}

  return (
    <div className={style.bg}>
      <div className={style.container}>
      <h3 className={style.heading}>  Agile Stories </h3>
      
      <button className={style.loginbutton}>Login</button>
      <button className={style.statbutton}>Statistics</button>
      <button className={style.sortbutton}>Sort</button>
    

      <form onSubmit={createNewStory} className={style.form}> 
      
      
      
      <input value={name} onChange={(e) => setName(e.target.value)} className={style.name} type="text" placeholder='Story'/>
      <input value={priority} onChange={(e) => setPriority(e.target.value)} className={style.priority} type="text" placeholder='Priority'/>
      <input value={descrip} onChange={(e) => setDescrip(e.target.value)} className={style.description} type="text" placeholder='Description'/>
      
      <button className={style.addbutton} type="submit" size={30}> Add </button>
      </form>
      <ul>
        {stories.map((story, index) => (
        <Story key={index} story={story} name={name} priority={priority} descrip={descrip} Ifcomplete={Ifcomplete} deletestory={deleteStoryById}/>
        ))}
        
      </ul>
     
      </div>
    </div>
  );
}

export default App;
