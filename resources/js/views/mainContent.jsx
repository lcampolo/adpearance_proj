import React from 'react'
import $ from 'jquery'
import moment from 'moment'

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            content: '',
            comments: [],
        }
        this.clickedSubmitContent = this.clickedSubmitContent.bind(this)
        this.getLastFiveComments = this.getLastFiveComments.bind(this)
    }
    componentDidMount() {
        this.getLastFiveComments()

        //setup an interval to check for comments every 30 seconds
        let intervalId = setInterval(this.getLastFiveComments, 30000);
        this.setState({ intervalId: intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    getLastFiveComments() {
        //load most recent 5 comments
        $.get('/api/comments', response => {
            this.setState({
                comments: response
            })
        })
        
    }

    clickedSubmitContent() {
        this.setState({
            error: ''
        })
        let params = {
            name: this.state.name,
            email: this.state.email,
            content: this.state.content
        }

        var self = this

        $.ajax({
            type: "POST",
            url: '/api/saveComment',
            data: params,
            success: response => {
                self.setState({
                    name: '',
                    email: '',
                    content: '',
                    comments: response
                })
            },
            error: (xhr, status, message) => {
                self.setState({
                    error: message
                })
            }
        })
    }

    render() {
        return (
            <div className="uk-containter">
                <h1 class="uk-heading-line uk-text-center"><span>Make a Comment!</span></h1>
                <div className="uk-panel uk-panel-box uk-width-1-2 uk-text-center">
                    { this.state.comments.length === 0 ? 
                        <div>There are no comments yet. Be the first to add one!</div>
                    : this.state.comments.map(comment => {
                        return (
                            <div className="uk-card uk-card-default uk-container-center" key={comment.id}>
                                <p>{`${comment.name}(${comment.email}) says: `}</p>
                                <p className="uk-card-title">{comment.content}</p>
                            </div>
                        )})
                    }
                </div>
                <div className="uk-container-center uk-width-1-2">
                    <div className="uk-form-row">
                        <label>
                            Name
                            <input className="uk-textarea" type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
                        </label>
                    </div>
                    <div className="uk-form-row">
                        <label>
                            Email
                            <input type="text" className="uk-textarea" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
                        </label>
                    </div>
                    <div className="uk-form-row">
                        <label>
                            Comment
                            <textarea type="text" className="uk-textarea" value={this.state.content} onChange={(e) => this.setState({content: e.target.value})}></textarea>
                        </label>
                    </div>
                    <button className="uk-button uk-button-primary" disabled={!this.state.name || !this.state.email || !this.state.content} onClick={this.clickedSubmitContent}>Submit</button>
                    { this.state.error ? <div className="uk-alert uk-alert-danger">{this.state.error}</div> : null}
                </div>
            </div>
        )
    }
}