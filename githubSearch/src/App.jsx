import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const [state, setState] = useState(false)

  const searchUser = async (query) => {
    if (!query) return;
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json()
      setUsers(data.items || [])
    }
    catch (error) {
      console.error('error fetching data', error)
    }


  }

  const onHandleSubmit=(e)=>{
    e.preventDefault();
    setState(true);
    searchUser(query)

  }

  return (
    <div className=' flex justify-center items-center'>
      <div className='w-2/4 h-auto border rounded-lg border-spacing-1 border-blue-800 pt-2'>
        <h1>Github Search profile</h1>
        <form
          className='mt-5 mb-5 '
          onSubmit={onHandleSubmit} >
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-40 border border-black rounded-lg p-2 mr-4'>
          </input>
          <button
            type='submit'
            className='rounded-lg bg-cyan-600 border border-cyan-950 p-2 text-white'>
            Search

          </button>
        </form>
        {state && (<section>

          {users.length > 0 ? (
            users.map((user) => (<div key={user.id} className="mb-4 border-b pb-2"><img src={user.avatar_url}></img>
              <p>Username:{user.login}</p>
              <a href={user.html_url}>Profile</a>
            </div>))
          ) : (<p>No users found.</p>)}

        </section>
        )}


      </div>
    </div>
  )
}

export default App
