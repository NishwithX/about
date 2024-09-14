import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Project Page</h1>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Projects;