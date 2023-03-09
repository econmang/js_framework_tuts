'use client'

import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

type Props = {
  id: string
}

export default function DeleteBtn({ id }: Props) {
  const router = useRouter();

  const deleteNote = async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const res = await pb.collection('notes').delete(`${id}`);
    console.log(res);
    router.refresh();
  }

  return (
    <button onClick={deleteNote}>
      [Delete]
    </button>
  )
}
