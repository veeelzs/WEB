import { deleteStudentDb } from '@/db/studentDb';

interface Params {
  params: { id: string };
}

export async function DELETE(_req: Request, { params }: Params): Promise<Response> {
  const studentId = Number(params.id);
  const deletedStudentId = await deleteStudentDb(studentId);

  return new Response(JSON.stringify({ deletedStudentId }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
