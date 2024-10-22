/* eslint-disable no-unused-vars */
import React from 'react'

function EmailSender() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='email-card w-1/3 -mt-6 p-5 border rounded-lg shadow-lg bg-slate-50'>
            <h1 className='text-gray-600 text-3xl text-center'>Email Sender</h1>
            <p className='text-slate-400 text-center mt-1'>Send Email to your favourite person</p>
            <form className='' action=''>
                <div className="mt-5">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-600">To:</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter recepient's email id" required />
                </div>
                <div className="mt-5">
                    <label htmlFor="base-input" className="block mb-2 text-lg font-medium text-gray-600">Subject:</label>
                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Subject'/>
                </div>
                <div className="mt-5">
                    <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-600">Your message:</label>
                    <textarea id="message" rows="9" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Here..." required></textarea>
                </div>
                <div className="button-container mt-5 flex justify-center items-center">
                    <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
                    <button type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Clear</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmailSender
