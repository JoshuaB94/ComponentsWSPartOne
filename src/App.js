import React, {Component} from 'react';
import DisplayName from "./components/DisplayName/DisplayName";
import NamesList from './components/NamesList/NamesList';

class App extends Component {
    state = {
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
    };

    render(){
        return (
            <div>
                <NamesList names={this.state.names}/>
            </div>
        );
    }
}

export default App;