import React, {Component} from 'react';
// import DisplayName from "./components/DisplayName/DisplayName";
// import NamesList from './components/NamesList/NamesList';
// import AlertUser from './components/AlertUser/AlertUser';
import SuperheroTable from './components/SuperheroTable/SuperheroTable';

class App extends Component {
    state = {
        superheroes: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondaryAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondaryAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondaryAbility: 'Shoots web'
            }
        ]
    };

    render(){
        return (
            <div>
                <SuperheroTable superheroes={this.state.superheroes}/>
            </div>
        );
    }
}

export default App;