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

// import styles from "./index.module.css";
// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";

// export default function CommentsPage() {
//   const commentInputRef = useRef(null);
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState("");
//   const [editCommentId, setEditCommentId] = useState(null);
//   const [editedText, setEditedText] = useState("");

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const fetchComments = async () => {
//     const response = await fetch("/api/comments");
//     const data = await response.json();
//     setComments(data);
//   };

//   const submitComment = async () => {
//     if (comment.trim() === "") {
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
//     await response.json();
//     fetchComments();
//     setComment("");
//     commentInputRef.current.value = "";
//   };

//   const deleteComment = async (commentId) => {
//     await fetch(`/api/comments/${commentId}`, {
//       method: "DELETE",
//     });
//     fetchComments();
//   };

//   const startEditing = (commentId, initialText) => {
//     setEditCommentId(commentId);
//     setEditedText(initialText);
//   };

//   const cancelEditing = () => {
//     setEditCommentId(null);
//     setEditedText("");
//   };

//   const updateComment = async (commentId) => {
//     await fetch(`/api/comments/${commentId}`, {
//       method: "PUT",
//       body: JSON.stringify({ text: editedText }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     fetchComments();
//     setEditCommentId(null);
//     setEditedText("");
//   };

//   let string = JSON.stringify(comments);

//   // Check if localStorage is available before using it
//   if (typeof localStorage !== "undefined") {
//     localStorage.setItem("comments", string);
//   } else {
//     // Handle the absence of localStorage, such as using a different storage mechanism or displaying an error message
//     console.error("localStorage is not available. Unable to store comments.");
//   }

//   return (
//     <div className={styles.taskscontainer}>

//       <Link href="/" style={{ textDecoration: 'none' }}>
//         <p className={styles.p2}>Achievo</p></Link>

//       <div className={styles.maintasksection}>
//         <div className={styles.firstblock}>
//           <input
//             type="text"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             className={styles.commentinputtext}
//             ref={commentInputRef}
//           />
//           <button className={styles.button} onClick={submitComment}>
//             Create
//           </button>
//         </div>

//         <hr className={styles.hr} />

//         <div className={styles.singletask}>
//           {comments.map((comment) => (
//             <div key={comment.id}>
//               {editCommentId === comment.id ? (
//                 <div className={styles.savecancel}>
//                   <input
//                     className={styles.commentinputtext}
//                     type="text"
//                     value={editedText}
//                     onChange={(e) => setEditedText(e.target.value)}
//                   />
//                   <div style={{display:"flex",flexDirection:"row", gap:"20px"}}>
//                     <button
//                       className={styles.button}
//                       onClick={() => updateComment(comment.id)}
//                     >
//                       Save
//                     </button>
//                     <button className={styles.button} onClick={cancelEditing}>
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className={styles.updatedelete}>
//                   <p className={styles.commenttext}> {comment.text}</p>
//                   <div style={{display:"flex",flexDirection:"row", gap:"20px"}}>
//                   <button
//                     className={styles.button}
//                     onClick={() => startEditing(comment.id, comment.text)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className={styles.button}
//                     onClick={() => deleteComment(comment.id)}
//                   >
//                     Delete
//                   </button>
//                 </div></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import SearchIcon from '@mui/icons-material/Search';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from "./index.module.css";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function CommentsPage() {
  const commentInputRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
    setSearchQuery("");
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

  const handleSearch = () => {
    const filteredComments = comments.filter((comment) =>
      comment.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setComments(filteredComments);
  };

  const resetSearch = () => {
    fetchComments();
    setSearchQuery("");
  };

  return (
    <div className={styles.taskscontainer}>
      <div className={styles.searchbarsection}>
        <div>
          <Link href="/" style={{ textDecoration: "none" }}>
            <p className={styles.p2}>Achievo</p>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
          <button className={styles.button} onClick={handleSearch}>
            <SearchIcon/>
          </button>
          <button className={styles.button} onClick={resetSearch}>
            <YoutubeSearchedForIcon/>
          </button>
        </div>
      </div>

      <div className={styles.maintasksection}>
        <div className={styles.firstblock}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={styles.commentinputtext}
            ref={commentInputRef}
            placeholder='Here is my next task'
          />
          <button className={styles.button} onClick={submitComment}>
            <AddRoundedIcon/>
          </button>
        </div>
        <hr className={styles.hr} />
        <div className={styles.singletask}>
          {comments.map((comment) => (
            <div key={comment.id}>
              {editCommentId === comment.id ? (
                <div className={styles.savecancel}>
                  <input
                    className={styles.commentinputtext}
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    <button
                      className={styles.button}
                      onClick={() => updateComment(comment.id)}
                    >
                      <ThumbUpRoundedIcon/>
                    </button>
                    <button className={styles.button} onClick={cancelEditing}>
                      <ThumbDownRoundedIcon/>
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.updatedelete}>
                  <p className={styles.commenttext}> {comment.text}</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    <button
                      className={styles.button}
                      onClick={() => startEditing(comment.id, comment.text)}
                    >
                      <TipsAndUpdatesIcon/>
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => deleteComment(comment.id)}
                    >
                      <DeleteIcon/>
                    </button>
                  </div>
                </div>
              )}
              <hr style={{width: '80%', margin: '30px 0 0', }}/>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}
