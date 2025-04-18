"use client"
import React, { useState } from 'react'

const Page = () => {
  const [Title, setTitle] = useState("")
  const [Disc, setDisc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (Title.trim() && Disc.trim()) {
      setmainTask([...mainTask, { Title, Disc }])
      setTitle("")
      setDisc("")
    }
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-4xl mb-4">📋</div>
      <h2 className="text-2xl font-medium text-gray-400 text-center">
        Your tasks will appear here
      </h2>
      <p className="text-gray-500 mt-2 text-center">
        Add your first task to get started!
      </p>
    </div>
  )

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li 
        key={i} 
        className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <div className="flex-1 mb-4 md:mb-0">
          <h5 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t.Title}
          </h5>
          <h6 className="text-lg md:text-xl mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.Disc}
          </h6>
        </div>
        <button
          onClick={() => deleteHandler(i)}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200 hover:shadow-red-500/30 active:scale-95"
        >
          Delete Task
        </button>
      </li>
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-100 via-blue-300 to-purple-600 bg-clip-text text-transparent">
            My Todo List
          </h1>
          <p className="text-gray-400 text-lg">
            Organize your life with colorful tasks
          </p>
        </header>

        {/* Form */}
        <form 
          onSubmit={submitHandler} 
          className="mb-12 p-6 md:p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Task Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all"
                placeholder="What needs to be done?"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <input
                id="description"
                type="text"
                className="w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 transition-all"
                placeholder="Add some details..."
                value={Disc}
                onChange={(e) => setDisc(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!Title.trim() || !Disc.trim()}
            className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add New Task
          </button>
        </form>

        {/* Task List */}
        <div className="p-6 md:p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Your Tasks
            </span>
            <span className="ml-auto bg-gray-800 text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
              {mainTask.length} {mainTask.length === 1 ? 'item' : 'items'}
            </span>
          </h2>
          
          <ul className="space-y-4">
            {renderTask}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page