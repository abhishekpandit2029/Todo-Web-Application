// import { useState, useRef } from "react";

// export default function CommentsPage() {
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState("");
//   const commentInputRef = useRef(null);

//   // -------------------- GET
//   const fetchComments = async () => {
//     const response = await fetch("/api/comments");
//     const data = await response.json();
//     setComments(data);
//   };
//   //-------------------- GET

//   //-------------------- POST
//   const submitComment = async () => {
//     if (comment.trim() === "") {
//       // Clear the input field and return
//       setComment("");
//       commentInputRef.current.value = "";
//       return;
//     }

//     const response = await fetch("/api/comments", {
//       method: "POST",
//       body: JSON.stringify({ comment }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();
//     fetchComments();

//     // Clear the input field
//     setComment("");
//     commentInputRef.current.value = "";
//   };
//   //-------------------- POST

//   //-------------------- DELETE
//   const deleteComment = async (commentId) => {
//     const response = await fetch(`/api/comments/${commentId}`, {
//       method: "DELETE",
//     });
//     fetchComments();
//   };
//   //-------------------- DELETE

//   //-------------------- PUT
//   const [editCommentId, setEditCommentId] = useState(null);
//   const [editedText, setEditedText] = useState("");

//   const startEditing = (commentId, initialText) => {
//     setEditCommentId(commentId);
//     setEditedText(initialText);
//   };

//   const cancelEditing = () => {
//     setEditCommentId(null);
//     setEditedText("");
//   };

//   const updateComment = async (commentId) => {
//     const response = await fetch(`/api/comments/${commentId}`, {
//       method: "PUT",
//       body: JSON.stringify({ text: editedText }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();
//     fetchComments();
//     setEditCommentId(null);
//     setEditedText("");
//   };
//   //-------------------- PUT

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           ref={commentInputRef}
//         />
//         <button onClick={submitComment}>Submit comment</button>
//       </div>
//       {comments.map((comment) => {
//         return (
//           <div key={comment.id}>
//             {comment.id}.
//             {editCommentId === comment.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editedText}
//                   onChange={(e) => setEditedText(e.target.value)}
//                 />
//                 <button onClick={() => updateComment(comment.id)}>Save</button>
//                 <button onClick={cancelEditing}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 {comment.text}
//                 <button onClick={() => startEditing(comment.id, comment.text)}>
//                   Update
//                 </button>
//                 <button onClick={() => deleteComment(comment.id)}>
//                   Delete
//                 </button>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </>
//   );
// }


import { useState, useRef, useEffect } from "react";

export default function CommentsPage() {
  const commentInputRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    if (comment.trim() === "") {
      setComment("");
      commentInputRef.current.value = "";
      return;
    }

    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    fetchComments();
    setComment("");
    commentInputRef.current.value = "";
  };

  const deleteComment = async (commentId) => {
    await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    fetchComments();
  };

  const startEditing = (commentId, initialText) => {
    setEditCommentId(commentId);
    setEditedText(initialText);
  };

  const cancelEditing = () => {
    setEditCommentId(null);
    setEditedText("");
  };

  const updateComment = async (commentId) => {
    await fetch(`/api/comments/${commentId}`, {
      method: "PUT",
      body: JSON.stringify({ text: editedText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchComments();
    setEditCommentId(null);
    setEditedText("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          ref={commentInputRef}
        />
        <button onClick={submitComment}>Submit comment</button>
      </div>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id}.
          {editCommentId === comment.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={() => updateComment(comment.id)}>Save</button>
              <button onClick={cancelEditing}>Cancel</button>
            </>
          ) : (
            <>
              {comment.text}
              <button onClick={() => startEditing(comment.id, comment.text)}>
                Update
              </button>
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}
