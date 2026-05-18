import React, { useReducer, useRef, useState } from 'react'

export default function App() {
  let user = useRef(null)
  let user1 = useRef(null)
  function reducer(state, action) {
    switch (action.type) {
      case "Add":
        return {
          ...state, users: [...state.users, action.user]
        }
      case "Remove":
        return {
          ...state, users: state.users.filter((_, index) => index !== action.index)
        }
      case "Edit":
        return {
          ...state,
          users: state.users.map((user, index) =>
            index === action.index ? action.user : user
          )
        }
    }
    throw new Error("Undefined Error", action.type)
  }
  function AddUser() {
    let username = user.current.value;
    dispatch({ type: "Add", user: username })
  }
  function UpdateUser(index) {
    let username = user1.current.value;
    dispatch({ type: "Edit", user: username, index })
  }
  const [state, dispatch] = useReducer(reducer, { users: [] })
  const [EditIndex, setEditIndex] = useState(false)
  return (
    <>
      <div className='flex flex-col text-center justify-center items-center text-3xl border-2 p-2 m-2'>
        <label htmlFor="name">Enter Name</label>
        <input type="text" name="name" ref={user} id="name" className='border w-50 text-3xl' />
        <button onClick={() => AddUser()}>Add</button>
      </div>
      {
        state.users.map((i, index) => {
          return <div className='flex justify-center flex-col' key={index}>
            <li className='text-3xl text-center'>{i} <span onClick={() => dispatch({ type: "Remove", index })}>Remove</span> <span onClick={() => setEditIndex(index)}>Edit</span></li>
            {
              (EditIndex === index) ?
                <>
                  <input type="text" ref={user1} name="edit" id="edit" className='border text-3xl' />
                  <button className='text-3xl' onClick={() => {
                    setEditIndex(null)
                    UpdateUser(index)
                  }
                  }>Save</button>
                </> : null
            }
          </div>
        })
      }
    </>
  )
}
