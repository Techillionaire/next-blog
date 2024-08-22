import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    
    <article>
      
      <div>
        <Link href={`/blogs`}>Title of my Blog</Link>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores placeat dolore officia harum pariatur qui aut aperiam facere, molestiae quam enim doloribus exercitationem incidunt, consequuntur, esse cumque quaerat possimus.</p> */}
        <p>Author: Lee</p>
      </div>
    </article>
  )
}

export default Blog