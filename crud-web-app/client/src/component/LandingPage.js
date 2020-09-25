import React, { Component } from 'react';
import axios from 'axios';



 class LandingPage extends Component {

  state = {
    posts : []
  }

  componentDidMount() {
    this.getPosts();
  }

  // method for getting all post.
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

  // function to delete the post by id
  onDelete = (id) => {
    console.log(id);

    axios.delete(`http://localhost:3001/api/delete/${id}`).then((res) => {
      console.log(res.data.posts);
   
      alert(res.data.posts.title + " has been deleted successfully");
      this.getPosts();
    });
  };

  // function for filtering the post data received from handleTextSearch() function..
  filterContent(post,searchTerm) {
    const result = post.filter((post) => post.title.includes(searchTerm));
    this.setState({posts : result});
  }


  // function to handle the input search

handleTextSearch = (e) => {
  const searchTerm = e.currentTarget.value;

  axios.get('http://localhost:3001/api/posts').then(res => {
    if(res.data.success) {
      this.filterContent(res.data.post,searchTerm)
    }
  }).catch((err) => {
    return console.log('Error : ' + err);
  });

}




  render() {
    return (
      <div className="container ">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Posts</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="Search post by title"
              name="search item"
              onChange={this.handleTextSearch}></input>
            </div>
          </div><br/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
 
        {this.state.posts.map((post,index) => (
    
    <tr>
      <th scope="row">{index}</th>
      <td>
        <a href={`/detail/${post._id}`}>{post.title}</a></td>
      <td>{post.description}</td>
      <td>{post.postCategory}</td>
      <td>
        <a className="btn btn-warning" href={`/edit/${post._id}`}>
          <i className="fas fa-pencil"></i>Edit
        </a>&nbsp;
        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(post._id)}>
          <i className="fa fa-trash"></i>Delete
        </a>
      </td>
    </tr>
    ))}

  </tbody>
</table>
<button className="btn btn-success"><a href="/add">Add New Post</a></button>
      </div>
    )
  }
}

export default LandingPage;