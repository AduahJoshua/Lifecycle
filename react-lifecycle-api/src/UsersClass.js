import React, { Component } from 'react'

class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()).
            then(data => {
                console.log(data)
                this.setState({ users: data })
            });
    }
    render() {
        return (
                <>
                <h1 style={{textAlign:'center', color:'yellowgreen'}}>User Class</h1>
                    {this.state.users.map(user =>
                        <div key={user.id} style={{color: 'blue', textAlign:'center', paddingBottom:'4px', backgroundColor:'black'}}>
                            <p>Name:{user.name}</p>
                            <p>UserName:{user.username}</p>
                            <p>Email:{user.email}</p>
                        </div>
                    )}
                </>
         )
      }
   }
 export default UserClass;