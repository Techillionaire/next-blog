import connectToDatabase from '@/lib/mongodb';
import Blog from '@/models/Blog';

// Connect to the database
const connect = async () => {
  await connectToDatabase();
};

// Handle GET requests
export const GET = async (req) => {
  await connect();
  
  try {
    const blogs = await Blog.find({});
    return new Response(JSON.stringify({ success: true, data: blogs }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Handle POST requests
export const POST = async (req) => {
  await connect();
  
  try {
    const body = await req.json();
    const blog = await Blog.create(body);
    return new Response(JSON.stringify({ success: true, data: blog }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
