import { useState } from "react";
import Note from "./components/Note";
import MDEditor from "@uiw/react-md-editor";

function App() {
  const [notes, setNotes] = useState([
    {
      title : "# Enter Title Here",
      content : "# Enter title here"
    }
  ]);

  const [currentNote ,setCurrentNote] = useState(0);

  const addNote = () => {
    setNotes([
      ...notes,
      { title: "# Enter Title Here", content: "# Enter Title Here" },
    ]);
  };

  const deleteNote = (index) => {
    const temp = [...notes];
    temp.splice(index, 1);
    setNotes(temp);
  };

  const changeCurrent = (index) =>{
    setCurrentNote(index);
  }

  const modifyCurrentNote = (text) =>{
    let temp = [...notes]
    temp[currentNote].content = text
    temp[currentNote].title = text.split("\n")[0]
    setNotes(temp);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", gap:"10px" }}>
        <div style={{width:"20%"}}>
          <h1>Note</h1>
          <button onClick={addNote}>Add Note</button>
          {notes.map((item, index) => (
            <Note title={item.title} index={index} delNote={deleteNote} changeCurrent={changeCurrent} />
          ))}
        </div>


        <div style={{flexGrow:"1", height:"600px"}}>
          <MDEditor value={notes[currentNote].content} onChange={(value) =>  modifyCurrentNote(value)} height="100%"  />
        </div>
      </div>
    </>
  );
}

export default App;
