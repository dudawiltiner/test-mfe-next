import jwtDecode from 'jwt-decode';
import { getSession } from 'next-auth/react';
import { apiAuth } from 'src/services/axiosAuthConfig';

interface Decoded {
  id: string;
}

export async function clearUser() {
  const session = await getSession();
  const decoded = jwtDecode(session?.jwt ?? '') as Decoded;
  await apiAuth.delete(`/user/${decoded?.id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`,
    },
  });
}
