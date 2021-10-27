import { useEffect, useState } from "react";
import logo from "../images/kidsmagz.svg";

function Profile({ homeFunc, chatFunc, logOutFunc }) {
	const [headding, setHeadding] = useState("");

	const [account, setAccount] = useState([]);
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");

	const postAdd = async () => {
		var uid = localStorage.getItem("userId");

		const res = await fetch("http://localhost:4000/post/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userId: uid,
				headding: headding,
				description: description,
				image: image,
			}),
		});

		console.log(
			JSON.stringify({
				userId: localStorage.getItem("userId"),
				headding: headding,
				description: description,
				image: image,
			})
		);
		const data = await res.json();
		console.log(data);
	};

	// Account Details

	useEffect(() => {
		const getAccount = async () => {
			const accountFromServer = await fetchAccount();
			console.log(accountFromServer);
			setAccount(accountFromServer);
		};

		getAccount();
	}, []);

	const fetchAccount = async () => {
		var userid = localStorage.getItem("userId");
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
		<div class="wrapper">
			<nav class="left">
				<i class="fas fa-home" id="home" onClick={homeFunc}></i>
				<i class="fas fa-comments" id="messages" onClick={chatFunc}></i>
				<i class="fas fa-sign-out-alt" onClick={logOutFunc}></i>
			</nav>
			<div class="bodywrapper">
				<nav class="top">
					<img src={logo} className="img" alt=""></img>

					<div class="searchbox">
						<i class="fas fa-search"></i>
						<input type="text" placeholder="Search"></input>
					</div>

					<i class="fas fa-user-circle"></i>
				</nav>

				{/* Start */}

				<div class="profile">
					<div class="head">
						<i class="fas fa-user-circle"></i>
						<h4>{account.username}</h4>
						<button>Edit Profile</button>
					</div>
					<div class="center">
						<h6>{account.username}</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in sunt eligendi aperiam, sit dolores similique laboriosam nostrum blanditiis molestias magni distinctio alias harum temporibus quia mollitia non nobis quae laborum voluptates dolore sint repellat possimus. Repudiandae sed, dolor incidunt eos officiis velit nemo molestias obcaecati dicta pariatur architecto numquam?</p>
					</div>
					<div class="tail">
						<div class="write-post-container">
							<h4>Create Post</h4>
							<div class="post-input-container">
								<textarea rows="3" placeholder="Post Heading" onChange={(e) => setHeadding(e.target.value)} value={headding}></textarea>
								<textarea rows="3" placeholder="Post Image" onChange={(e) => setImage(e.target.value)} value={image}></textarea>
								{/* <form action="/action_page.php">
                                    <label for="img">Select image:</label>
                                    <input type="file" id="img" name="img" accept="image/*" placeholder="Image" required onChange={imageChanged} />
                                </form> */}
								<div class="post-text">
									<textarea rows="3" placeholder="Write your post" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
									<i class="fas fa-paper-plane" onClick={postAdd}></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
