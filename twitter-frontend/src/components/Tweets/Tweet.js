import React from 'react';
import defaultPhoto from '../../assets/default_profile.png';
import Photo from '../shared/Photo';
import './Tweet.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Tweet = ({ user, createdAt, content }) => (
	<article className="tweet bordered">
		<div className="left">
			<Photo src={defaultPhoto} className="tweet-photo" />
		</div>
		<div className="right">
			<div className="tweet-header">
				<span className="tweet-name">{user.name}</span>
				<span className="tweet-username">{user.username}</span>
				<span className="tweet-separator">.</span>
				<time dateTime={createdAt}>
					{formatDistanceToNow(new Date(createdAt))}
				</time>
			</div>
			<div>
				{content}
				<div className="tweet-actions"></div>
			</div>
		</div>
	</article>
);

export default Tweet;
