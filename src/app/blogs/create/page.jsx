// Use client-side directives
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const router = useRouter(); // Initialize router from next/navigation
  const success = () => toast("Blog created successfully");
  const error = () => toast("Blog failed to create");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content: body, author }), // Fixed body content key
    });

    if (res.ok) {
      success()
      router.push('/');
    } else {
      error()
      // Handle the error if the response is not ok
      // const errorData = await res.json(); // Assuming the API returns error details in JSON format
      // console.error('Error:', errorData);
      // alert(`Error: ${errorData.error || 'An error occurred while submitting the blog.'}`);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="mt-10 text-2xl">Add a Blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col border w-[500px] mt-[100px] p-10 shadow space-y-4">
        <input
          type="text"
          className="ring outline-0 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> 
        <textarea
          placeholder="Content of the blog"
          value={body}
          className="ring outline-0 rounded"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <input 
          value={author} 
          className="ring outline-0 rounded"
          onChange={(e) => setAuthor(e.target.value)} 
          type="text" 
          placeholder="Please enter author's name"
        />
        <button type="submit" className="rounded bg-blue-500 py-2  hover:bg-blue-300">Create Blog</button>
        <ToastContainer />
      </form>
    </main>
  );
};

export default Create;
