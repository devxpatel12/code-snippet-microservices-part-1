import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateComment = ({ snippetId }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8001/api/v1/snippet/${snippetId}/comment`,
        { text }
      ); 
      setComments([...comments, res.data.comment]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8001/api/v1/snippet/${snippetId}/comment`
        ); 
       setComments(res.data)
      } catch (error) {}
    };
    fetchComments();
  }, []);

  return (
    <div className="mt-3">
      {comments.map((comment, index) => (
        <li key={index} className="text-sm">{comment.text}</li>
      ))}
      <form onSubmit={addComment} className="flex mt-3  items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add comment"
          className="border rounded px-2 text-sm py-1"
        />
        <button className="bg-black text-white px-4">Add</button>
      </form>
    </div>
  );
};

export default CreateComment;
