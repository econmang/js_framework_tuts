'use client'

import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export default function DeleteBtn({ id }: string) {
  const router = useRouter();

  const deleteNote = async () => {
    pb = new PocketBase("http://127.0.0.1:8090");
    res = await pb.collection('notes').delete(`${id}`);
    router.refresh();
  }

  return (
    <button onClick={deleteNote}>
      [Delete]
    </button>
  )
}
