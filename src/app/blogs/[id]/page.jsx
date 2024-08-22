"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
  const router = useRouter();
  const [id, setId] = useState(null);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // `router.query` should provide the `id` directly in App Router
    if (router.query.id) {
      setId(router.query.id);
    }
  }, [router.query]);

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const res = await fetch(`/api/blogs/${id}`);
          if (res.ok) {
            const data = await res.json();
            setBlog(data);
          } else {
            console.error('Error fetching blog:', await res.json());
          }
        } catch (error) {
          console.error('Error fetching blog:', error);
        }
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>{blog.author}</p>
      <button onClick={() => router.push(`/edit/${blog._id}`)}>Edit</button>
    </div>
  );
}
