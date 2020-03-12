import React, { Component } from 'react'

 class Word extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username: ''
         }
     }
        handleChange = (event) => {
            this.setState({

        username: event.target.value
            })
            }
            
            submit = (event) => {
                alert(`this ${this.state.username}`)

            }  


    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    {/* {JSON.stringify(username)} */}

                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleChange} placeholder={this.state.username}>

                        </input>
                        <input type="text"/>
                        <input type="submit"/>
                        <button type="submit">submite</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Word
