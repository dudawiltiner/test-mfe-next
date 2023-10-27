import BackgroundImage from '@components/atoms/General/BackgroundImage';
import SelectLanguage from '@components/atoms/General/SelectLanguange';
import { ToggleButton } from '@components/atoms/General/ToggleButton';
import FormAddTask from '@components/organisms/Home/FormAddTask';
import TasksListContainer from '@components/organisms/Home/TasksListContainer';
import { Locale } from '@config/i18n.config';
import ReactQueryProvider from '@context/ReactQueryProvider';
import ToDoListProvider from '@context/ToDoListProvider';
import { DictionaryResult } from '@dictionaries/default-dictionaries';
import { Box, Paper, Stack, Typography } from '@mui/material';
import * as S from './styles';

export default function HomeTemplate({
  dictionary,
  lang,
  hasi18n,
}: {
  dictionary: DictionaryResult;
  lang: Locale;
  hasi18n: boolean;
}) {
  return (
    <Stack alignItems={'center'} minHeight={'100vh'}>
      <Box style={S.BoxStyle}>
        <BackgroundImage />
      </Box>
      <Stack
        marginTop={3}
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        maxWidth={'900px'}
      >
        {hasi18n && <SelectLanguage lang={lang} />}
        <ToggleButton />
      </Stack>

      <Paper style={S.PaperStyle}>
        <Stack spacing={3}>
          <Typography
            data-cy={'to-do-list-title'}
            variant="h2"
            color={'secondary'}
          >
            {dictionary?.home?.title}
          </Typography>
          <ReactQueryProvider>
            <ToDoListProvider dictionary={dictionary}>
              <FormAddTask />
              <TasksListContainer />
            </ToDoListProvider>
          </ReactQueryProvider>
        </Stack>
      </Paper>
      <Box style={S.BoxStyle}>
        <BackgroundImage />
      </Box>
    </Stack>
  );
}
