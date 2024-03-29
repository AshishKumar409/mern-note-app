import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Badge, Button,Card,Accordion} from 'react-bootstrap'
import MainScreen from '../../Components/MainScreen'
// import notes from "../../data/notes"
import axios from 'axios'



const MyNotes = () => {

  const [notes,setNotes] = useState([])
  function deleteNote(id){
    if(window.confirm("Are you sure?")){

    }
  }

  let fetchNotes = async()=>{
    const response = await axios.get("/api/notes")
    setNotes(response.data)
  }

  useEffect(()=>{
   fetchNotes()
  },[])
  return (
    <MainScreen title="Hello">
     <Link to="createnote">
       <Button style={{marginLeft:"10",marginBottom:"6"}} size="lg">Create New Button</Button>
       </Link>
       {notes.map((note)=>{
         return (
           <Accordion key={note._id}>
         <Card style={{ margin: 10 }}>
      <Card.Header style={{ display: "flex" }}>
        <span style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}>
                      <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" >{note.title} </Accordion.Toggle>
                      </span>
        <div>
          <Button href={`/note/${note._id}`}>Edit</Button>
          <Button variant="danger" className="mx-2" onClick={()=>deleteNote(note._id)}>Delete</Button>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
      <Card.Body>
        <h4>
        <Badge variant="success">
          Category-{note.category}
        </Badge>
        </h4>
        <blockquote className="blockquote mb-0">
                      {/* <ReactMarkdown>{note.content}</ReactMarkdown> */}
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        {/* Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite> */}
                        Created On Date
                      </footer>
                    </blockquote>
      </Card.Body>
      </Accordion.Collapse>
      </Card>
      </Accordion>)
       })}
    
      
    </MainScreen>
  )
}

export default MyNotes
