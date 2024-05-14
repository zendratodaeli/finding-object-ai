import prismadb from '@/lib/db/prismadb';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const NotesPage = async () => {
  const { userId } = auth();

  if(!userId) {
    throw Error("userId is undefined")
  };

  const allNotes = await prismadb.note.findMany({
    where: {userId}
  });

  return (
    <div>
      {JSON.stringify(allNotes)}
    </div>
  )
}

export default NotesPage
