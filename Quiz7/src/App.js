import logo from './logo.svg';
import './App.css';
import LoginTitle from './LoginTitle.js';
import LoginApp from './LoginApp.js';
import ToDo from './ToDoRun.js';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
		<div>{LoginTitle()}</div>
		<Router>
			<div>
				<li><Link to="/Todo">Todo</Link></li>
				<li><Link to="/Login">Login</Link></li>
				<hr />
				<Switch>
					<Route path="/Login" exact component={LoginApp} />
					<Route path="/Todo" component={ToDo} />
				</Switch>
			</div>
		</Router>
        </div>
	);
}

export default App;
