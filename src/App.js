import Login from "./components/Login";
import Home from "./components/Home";
// import {ReactComponent as kidsmagz} from "./images/kidsmagz.svg";
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "./components/Profile";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [homeOrChat, setHomeOrChat] = useState(true);

	useEffect(() => {
		const user = localStorage.getItem("userId");

		if (user === undefined || user === null) {
			setLoggedIn(false);
		} else {
			setLoggedIn(true);
		}
	}, []);

	const SignInFunc = async ({ email, password }) => {
		const res = await fetch("http://localhost:4000/app/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});

		const data = await res.json();

		console.log(data.data.username);
		localStorage.setItem("userId", data.data.uid);
		setLoggedIn(true);
		alert(`Signed In as ${data.data.username}`);
	};

	const SignUpFunc = async (registerEvent) => {
		const res = await fetch("http://localhost:4000/app/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(registerEvent),
		});

		const data = await res.json();

		console.log(data);
		alert(`Signed Up ${data}`);
	};

	const logOutFunc = () => {
		console.log("done");
		localStorage.removeItem("userId");
		setLoggedIn(false);
	};

	const homeFunc = () => {
		setHomeOrChat(true);
	};

	const chatFunc = () => {
		setHomeOrChat(false);
	};

	const profileFunc = () => {
		window.location.href = "/profile";
	};

	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					{loggedIn ? <Home logOutFunc={logOutFunc} chatFunc={chatFunc} homeFunc={homeFunc} profileFunc={profileFunc} homeOrChat={homeOrChat} /> : <Login SignInFunc={SignInFunc} SignUpFunc={SignUpFunc} />}
				</Route>
				<Route path="/dashboard" exact>
					{loggedIn ? <Home logOutFunc={logOutFunc} chatFunc={chatFunc} homeFunc={homeFunc} profileFunc={profileFunc} homeOrChat={homeOrChat} /> : <Redirect to="/" />}
				</Route>
				<Route path="/profile" exact>
					{loggedIn ? <Profile chatFunc={chatFunc} logOutFunc={logOutFunc} homeFunc={homeFunc} profileFunc={profileFunc} /> : <Login SignInFunc={SignInFunc} SignUpFunc={SignUpFunc} />}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
