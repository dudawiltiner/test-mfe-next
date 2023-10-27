import { CircularProgress, Stack } from '@mui/material';

export default function Loading() {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <CircularProgress />
    </Stack>
  );
}
