import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EpisodeDetailsPage() {
  const [episode, setEpisode] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // Fetch episode details and comments
    // This is a placeholder. Replace with actual API calls.
    const fetchEpisodeDetails = async () => {
      // const response = await fetch(`your-api-endpoint/episodes/${id}`);
      // const data = await response.json();
      // setEpisode(data);
      
      // Placeholder data
      setEpisode({
        id: id,
        title: `Episode ${id}`,
        description: `This is the description for episode ${id}.`,
        airDate: '2024-01-01'
      });
    };

    const fetchComments = async () => {
      // const response = await fetch(`your-api-endpoint/episodes/${id}/comments`);
      // const data = await response.json();
      // setComments(data);
      
      // Placeholder data
      setComments([
        { id: 1, text: 'Great episode!', author: 'User1' },
        { id: 2, text: 'Can\'t wait for the next one!', author: 'User2' }
      ]);
    };

    fetchEpisodeDetails();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    // This is a placeholder. Replace with actual API call.
    // const response = await fetch(`your-api-endpoint/episodes/${id}/comments`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ text: newComment })
    // });
    // const data = await response.json();
    
    // Placeholder: add new comment to state
    const newCommentObj = {
      id: comments.length + 1,
      text: newComment,
      author: 'CurrentUser'
    };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div className="episode-details">
      <h1>{episode.title}</h1>
      <p>{episode.description}</p>
      <p>Air Date: {episode.airDate}</p>

      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <small>By: {comment.author}</small>
          </li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default EpisodeDetailsPage;