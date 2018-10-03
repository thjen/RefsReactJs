import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel title</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label for="">Name</label>
                            <input type="text" className="form-control"
                                ref="name"
                            />
                        </div>
                        <button type="button" className="btn btn-default"
                            onClick={() => {
                                alert(this.refs.name.value)
                            }}>Refs demo</button>
                    </div>
                </div>
            </div>               
        );
    }
}

export default App;
