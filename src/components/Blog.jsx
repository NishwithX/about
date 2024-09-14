// src/components/Blog.jsx
import { useNavigate } from 'react-router-dom';

function Blog() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Blog Page</h1>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Blog;