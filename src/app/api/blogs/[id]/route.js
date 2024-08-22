// app/api/blogs/[id]/route.js
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET(request, { params }) {
  const { id } = params;

  await connectToDatabase();

  try {
    const blog = await Blog.findById(id);
    if (!blog) return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching blog' }), { status: 400 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();

  await connectToDatabase();

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBlog) return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
    return new Response(JSON.stringify(updatedBlog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating blog' }), { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  await connectToDatabase();

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
    return new Response(JSON.stringify({}), { status: 200 }); // No data to send on delete
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting blog' }), { status: 400 });
  }
}
