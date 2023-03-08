'use client';
import PocketBase from 'pocketbase';
import { useState } from 'react'
import { useRouter } from 'next/navigation';

function resolveAfter2Secs() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}
export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();
  const create = async () => {
    result = await fetchBooks(); 
    console.log(result);
  }

  return (
    <>
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Create note
      </button>
    </form>
    <button onSubmit={createTest}>testCreate</button>
    </>
  );
} 
