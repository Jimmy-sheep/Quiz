import logo from './logo.svg';
import './App.css';
import LoginTitle from './LoginTitle.js';
import LoginInputBox from './LoginInputBox.js';
import LoginMultiButton from './LoginMultiButton.js';

function LoginApp() {
	return (
		<div className="App">
		<div>{LoginTitle()}</div>
		<div>{LoginInputBox()}</div>
		<div>{LoginMultiButton()}</div>
        </div>
	);
}

export default LoginApp;