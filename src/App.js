import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import marked from 'marked'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            markdown: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            markdown: event.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Markdown</h2>
                        <textarea 
                            rows="8" 
                            onChange={this.handleChange}
                            value={this.state.markdown}
                            style={{width: "300"}} 
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Preview</h2>
                        <div>
                            dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
}

export default App;
