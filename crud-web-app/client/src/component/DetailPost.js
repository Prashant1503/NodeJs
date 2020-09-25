import React, { Component } from 'react';
import axios from 'axios';

export default class DetailPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post : {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;

    
        axios.get(`http://localhost:3001/api/detail/${id}`).then((res) => {
            // console.log(res.data.post);
            
            this.setState({
                post : res.data.post
               
            });  console.log(this.state.post);
        });
    }

     

    render() {
        const {title,description,postCategory} = this.state.post;
        return (
            <div>
                <h4>{title}</h4>
                <dl class="row">
                    <dt className="col-sm-2">Category</dt>
                    <dd className="col-sm-10">{postCategory}</dd>

                    <dt className="col-sm-2">Description</dt>
                    <dd className="col-sm-10">
                        <p>{description}</p>
                        
                    </dd> 
                    </dl>
            </div>
        )
    }
}
