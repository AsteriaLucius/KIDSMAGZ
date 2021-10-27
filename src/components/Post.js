import { useEffect, useState } from "react";
import React from "react";

const Post = ({ postData }) => {
	const [account, setAccount] = useState([]);

	useEffect(() => {
		const getAccount = async () => {
			const accountFromServer = await fetchAccount();
			console.log(accountFromServer);
			setAccount(accountFromServer);
		};

		getAccount();
	}, []);

	const fetchAccount = async () => {
		var userid = postData.userId;
		const res = await fetch("http://localhost:4000/account/find", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userid: userid,
			}),
		});

		const data = await res.json();
		console.log(data);
		return data;
	};

	return (
		<div class="post">
			<div class="header">
				<div class="account-detail">
					<i class="fas fa-user-circle" id="user"></i>
					<h5>{account.username}</h5>
				</div>
				<div class="edit">
					<i className="fas fa-ellipsis-h" id="more"></i>
				</div>
			</div>

			<img src={postData.postImage} alt={postData.postHeading} class="pic"></img>

			<div class="icons">
				<div class="changes">
					<i class="far fa-heart"></i>
					<i class="far fa-comment"></i>
					<i class="fab fa-telegram-plane"></i>
				</div>
				<div class="bookmark">
					<i class="far fa-bookmark"></i>
				</div>
			</div>
			<div class="comments">
				<h6>
					<span>"</span>
					{postData.postDescription}
					<a href="/">(more)</a>
				</h6>
				<p>{postData.postDate}</p>
			</div>
		</div>
	);
};

export default Post;
