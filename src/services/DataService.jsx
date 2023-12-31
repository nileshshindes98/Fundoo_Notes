import axios from "axios";

const BASE_URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes";

const headerConfig = () => {
  return {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  };
};

export const addNote = async (noteData) => {
  const response = await axios.post(
    `${BASE_URL}/addNotes`,
    noteData,
    headerConfig()
  );
  return response;
};
export const getNotes = async () => {
  const response = await axios.get(`${BASE_URL}/getNotesList`, headerConfig());
  return response;
};
export const archiveNotes = async (noteData) => {
  const response = await axios.post(
    `${BASE_URL}/archiveNotes`,
    noteData,
    headerConfig()
  );
  return response;
};
export const deleteNotes = async (noteData) => {
  const response = await axios.post(
    `${BASE_URL}/trashNotes`,
    noteData,
    headerConfig()
  );
  return response;
};

export const deleteNotesForever = async (noteData) => {
  const response = await axios.post(
    `${BASE_URL}/deleteForeverNotes`,
    noteData,
    headerConfig()
  );
  return response;
};

export let changeColor = async (noteData) => {
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",
    noteData,
    headerConfig()
  );
  return response;
};

export const updateNote = async (note) => {
  console.log(note);
  const response = await axios.post(
   
    `${BASE_URL}/updateNotes?${note.noteId}`,note,
    headerConfig()
  );
  return response;
};