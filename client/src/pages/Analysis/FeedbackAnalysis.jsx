import React, { useState } from "react";

// Dummy feedback data (in a real scenario, this would come from a server or database)
const initialFeedback = [
  { id: 1, comment: "Great course, but the pace was too fast.", rating: 4 },
  { id: 2, comment: "More practical examples needed.", rating: 3 },
  { id: 3, comment: "Excellent trainer, but content could be more detailed.", rating: 4 },
  { id: 4, comment: "Loved the course, but timing was not flexible.", rating: 3 }
];

const FeedbackAnalysis = () => {
  const [feedback, setFeedback] = useState(initialFeedback);
  const [newFeedback, setNewFeedback] = useState("");
  const [rating, setRating] = useState(5);

  // Add new feedback
  const handleAddFeedback = () => {
    const newEntry = {
      id: feedback.length + 1,
      comment: newFeedback,
      rating: rating
    };
    setFeedback([...feedback, newEntry]);
    setNewFeedback("");
    setRating(5);
  };

  // Aggregate and analyze feedback
  const aggregatedFeedback = feedback.reduce((acc, item) => {
    acc.totalRating += item.rating;
    acc.comments.push(item.comment);
    return acc;
  }, { totalRating: 0, comments: [] });

  const averageRating = aggregatedFeedback.totalRating / feedback.length;

  // Identify common areas of improvement
  const commonIssues = aggregatedFeedback.comments.filter(comment => 
    comment.toLowerCase().includes("too fast") ||
    comment.toLowerCase().includes("practical examples") ||
    comment.toLowerCase().includes("content")
  );

  return (
    <div className="start-page text-white m-10 p-5 rounded-xl">
      <h1 className="text-3xl font-bold text-center">Feedback Analysis</h1>
      <div className="mt-5">
        <h2 className="font-semibold text-2xl">Feedback Summary</h2>
        <p className="mt-3 font-semibold">Total Feedback: {feedback.length}</p>
        <p className="">Average Rating: {averageRating.toFixed(1)}</p>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-semibold">Common Areas of Improvement</h2>
        <ul className="mt-3 font-semibold list-disc ml-5">
          {commonIssues.length > 0 ? commonIssues.map((issue, index) => (
            <li key={index}>{issue}</li>
          )) : <p>No common issues identified.</p>}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackAnalysis;
