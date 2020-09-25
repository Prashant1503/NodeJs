import React, { Component } from 'react';
import axios from 'axios';
import {setErrors} from '../ErrorHandler/setError';
import { Redirect,history } from 'react-router-dom';

export default class EditPost extends Component {

    state = {
        title : '',
        description : '',
        postCategory : '',
        errors : {}
    }

    componentDidMount() {

        // fetching data for given id..
        const id = this.props.match.params.id;
        axios.get(`http://localhost:3001/api/detail/${id}`).then((res) => {
            if(res.data.success) {
                this.setState({
                    title : res.data.post.title,
                    description : res.data.post.description,
                    postCategory : res.data.post.postCategory
                });
            }
        });
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

         // method for getting all post after updating the values.
        getPosts() {
            axios.get('http://localhost:3001/api/posts').then(res => {
            if(res.data.success) {
                this.setState({
                posts : res.data.post
                });
                console.log(this.state.posts);
            }
            }).catch((err) => {
            return console.log('Error : ' + err);
            });
        
        }
    // function for submitting post data.
    editPostData = (e) => {
        e.preventDefault();

        const {title,description,postCategory} = this.state;
        
        if(this.validate(title,description,postCategory)) {
         
            const updatedData = {
                title : title,
                description : description,
                postCategory : postCategory
            }
            // console.log(data);

            // getting id from paramater of the url
            const id = this.props.match.params.id;
            axios.put(`http://localhost:3001/api/update/${id}`,updatedData).then((res) => {
                if(res.data.success) {
                    alert('Post updated success');
                    this.setState({title : "",description : '',postCategory : ''});
                    this.props.history.push('/all');
                }
            });

        }
    };
   

    render() {
        return (
            <div className="col-md-10 mt-3 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
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
                            className="form-control"
                            name="description"
                            value={this.state.description}
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
                        <button className="btn btn-primary" type="submit" onClick={this.editPostData}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
