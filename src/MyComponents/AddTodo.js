import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title Cannot be Blank");
        } else if (!desc) {
            alert("Description of Todo Item Cannot be Blank");
        } else {
            // Prepare the todo object
            const newTodo = {
                title: title,
                desc: desc,
                // You can add other fields like 'sno' or 'id' if needed
            };

            // Send POST request to add the new todo
            axios.post('http://127.0.0.1:8000/api/todos/', newTodo)
                .then(response => {
                    // Assuming the API returns the created todo, you can now add it to the list
                    props.addTodo(response.data.title, response.data.desc); // Adjust this if necessary
                })
                .catch(error => {
                    console.error('There was an error adding the todo!', error);
                });

            // Reset form fields
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Add Your New Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title">To Do Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc">To Do Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add To Do Item</button>
            </form>
        </div>
    );
}

export default AddTodo;