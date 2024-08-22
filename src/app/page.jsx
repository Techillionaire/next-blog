"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        if (!res.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const { data } = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center border">
        <h1>Welcome to my Blog</h1>
        <Link href="/blogs/create" className="ring rounded py-1 px-4">Create Blog</Link>
      </div>

      <main>
        <ul>
          {blogs && blogs.map((b, i) => (
            <li key={i}>
              <Link href={`/blogs/${b._id}`}>
                {b.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
