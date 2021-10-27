import logo from "../images/kidsmagz.svg";
import Post from "./Post";
import Chat from "./Chat";
import { useEffect, useState } from "react";

function Home({ logOutFunc, homeFunc, chatFunc, homeOrChat, profileFunc }) {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const postsFromServer = await fetchPosts();
			console.log(postsFromServer);
			setAllPosts(postsFromServer);
		};

		getPosts();
	}, []);

	const fetchPosts = async () => {
		const res = await fetch("http://localhost:4000/post/");

		const data = await res.json();
		console.log(data);
		return data;
	};

	if (homeOrChat === true) {
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

						<i class="fas fa-user-circle" onClick={profileFunc}></i>
					</nav>
					<div className="mainContent">
						<div className="postCollection">
							{allPosts.map((posts, index) => {
								return <Post postData={posts}></Post>;
							})}
						</div>
						{/* <div className="profileSect">
                        <Profile accountDetails={profileData} />
                    </div> */}
					</div>
				</div>
			</div>
		);
	} else if (homeOrChat === false) {
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

						<i class="fas fa-user-circle" onClick={profileFunc}></i>
					</nav>
					<Chat />
				</div>
			</div>
		);
	}
}

export default Home;
