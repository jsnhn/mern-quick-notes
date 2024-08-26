import sendRequest from './send-request'
const BASE_URL = '/api/notes';

export async function createNote(newNote) {
    return sendRequest(BASE_URL, 'POST', newNote)
    // const res = await fetch(BASE_URL, { // fetch takes time to get to the server which is why we use async
    //     method: 'POST',
    //     headers:{'Content-Type': 'application/json'}, //provices extra info about the fetch itself. it stores another object// server is built using express. it looks to look at incoming headers. what data paylod we are passing to the body below
    //     body: JSON.stringify(userForm)
    // });
    // if (res.ok) {
    //     return res.json()// this returns a promise
    // } else {
    //     throw new Error('Invalid Sign Up') // Error is a class
    // }
}

export async function deleteNote(noteId) {
    return sendRequest (`${BASE_URL}/${noteId}`, 'DELETE')
}

export function getAll() {
    return sendRequest(BASE_URL)
}