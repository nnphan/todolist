import React, { Component } from 'react'

class TaskForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div className="pannel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Add Todo
                        <span className="fa fa-times-circle" aria-hidden="true"></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" name="name"/>
                        </div>
                        <label>Status:</label>
                        <select className="form-control" name="status">
                            <option value={true}>Enable</option>
                            <option value={false}>Disable</option>
                        </select><br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span></span>Save
                            </button>
                            <button type="submit" className="btn btn-danger">
                                <span></span>Canel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TaskForm;
