import React from 'react';
import TweetsPage from '../Tweets/TweetsPage';
import LoginPage from '../auth/LoginPage';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/* <TweetsPage /> */}
				<LoginPage />
			</div>
		);
	}
}

export default App;
