import React, { useState } from 'react';
import './FeedbackPage.css'; // Import the CSS file

const FeedbackPage = () => {
    const [comments, setComments] = useState([
        {
            name: 'John Doe',
            text: 'Excellent service! The repair team was quick and efficient. My equipment is working like new again.',
            date: 'August 2024',
            likes: 5,
            likedByUser: false
        },
        {
            name: 'Jane Smith',
            text: 'Very professional and reliable. They provided top-notch equipment and support. Highly recommended!',
            date: 'July 2024',
            likes: 3,
            likedByUser: false
        },
        {
            name: 'Mark Johnson',
            text: 'Great experience from start to finish. The staff was knowledgeable and the equipment exceeded my expectations.',
            date: 'June 2024',
            likes: 2,
            likedByUser: false
        }
    ]);

    const handleLike = (index) => {
        const updatedComments = [...comments];
        if (updatedComments[index].likedByUser) {
            updatedComments[index].likes -= 1;
        } else {
            updatedComments[index].likes += 1;
        }
        updatedComments[index].likedByUser = !updatedComments[index].likedByUser;
        setComments(updatedComments);
    };

    return (
        <div className="feedback-page">
            <h2 className="feedback-heading">Clients Feedbacks</h2>
            <div className="feedbacks">
                {comments.map((comment, index) => (
                    <div key={index} className="feedback-item">
                        <div className="feedback-header">
                            <h4 className="feedback-author">{comment.name}</h4>
                        </div>
                        <p className="feedback-text">"{comment.text}"</p>
                        <p className="feedback-date">{comment.date}</p>
                        <div className="feedback-actions">
                            <button onClick={() => handleLike(index)} className="like-button">
                                <i className={`fas fa-heart ${comment.likedByUser ? 'liked' : 'not-liked'}`} />
                                {comment.likes}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackPage;
