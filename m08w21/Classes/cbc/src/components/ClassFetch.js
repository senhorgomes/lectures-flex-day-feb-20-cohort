import { Component } from "react";

class ClassFetch extends Component {
    constructor() {
        super();

        this.state = {
            films: []
        };
    }
    //class component useEffect
    componentDidMount() {
        fetch('https://swapi.dev/api/people/1')
            .then(result => result.json())
            .then(data => this.setState({ films: data }));
    }

    render() {
        return (
            <section>
                <h2>Class-Based Movie List</h2>
                {this.state.films.length === 0 && <p>Loading...</p>}
                {this.state.films.name && <ul>
                    <li key={this.state.films.id}>
                        {this.state.films.name}
                    </li>
                    {/* {this.state.films.map(film => <li key={film.id}>
                        {film.name}
                    </li>)} */}
                </ul>}
            </section>
        );
    }
}

export default ClassFetch