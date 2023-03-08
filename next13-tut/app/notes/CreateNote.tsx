'use client';
import PocketBase from 'pocketbase';
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const create = async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");

    const data = {
      "title": `${title}`,
      "content": `${content}`,
    };

    const record = await pb.collection('notes').create(data);
    setTitle('');
    setContent('');
    router.refresh();
  }

  return (
    <form onSubmit={(e) => {e.preventDefault(); create();}}>
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
  );
} 
