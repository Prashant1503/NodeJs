import React, { Component } from 'react';
import Axios from 'axios';
import {history} from 'react-router-dom';
import {setErrors} from '../ErrorHandler/setError';

export default class CreatePost extends Component {

    state = {
        title : '',
        description : '',
        postCategory : '',
        errors : {}
    }

    // function for handleInput change..
    handleInputChange = (e) => {
        
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name] : value
        });
    }

        validate = (title,description,postCategory) => {
            const errors = setErrors(title,description,postCategory);
            this.setState({errors : errors});
            return Object.values(errors).every((err) => err === "");
        };
    // function for submitting post data.
    submitPostData = (e) => {
        e.preventDefault();

        const {title,description,postCategory} = this.state;
        
        if(this.validate(title,description,postCategory)) {
            
            
            const data = {
                title : title,
                description : description,
                postCategory : postCategory
            }
            // console.log(data);

            Axios.post("http://localhost:3001/api/create",data).then((res) => {
                if(res.data.success) {
                    alert('Post created success');
                    this.setState({title : "",description : '',postCategory : ''});
                    this.props.history.push('/all');
                }
            });

        }
  
    };

    render() {
        return (
            <div className="col-md-10 mt-3 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new Post</h1>
                <form className="needs-validation" noValidate>
                {/* div for title input field */}
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={this.state.title}

                            onChange={this.handleInputChange}
                            placeholder="Enter title"
                            />
                            {this.state.errors.title && (
                                 <div className="text-danger">{this.state.errors.title}</div>
                            )}
                    </div>
                    {/* div for description input field */}
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            value={this.state.description}
                            className="form-control"
                            name="description"
                            onChange={this.handleInputChange}
                            placeholder="Enter description" />

                            {this.state.errors.description && (
                                 <div className="text-danger">{this.state.errors.description}</div>
                            )}
                    </div>
                    {/* div for post category input field */}
                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            className="form-control"
                            name="postCategory"
                            value={this.state.postCategory}
                            onChange={this.handleInputChange}
                            placeholder="Enter category" />

                            {this.state.errors.postCategory && (
                                 <div className="text-danger">{this.state.errors.postCategory}</div>
                            )}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" onClick={this.submitPostData}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
