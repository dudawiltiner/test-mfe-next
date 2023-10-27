import FormContainerRegister from '@components/organisms/Register/FormContainer';
import SignTemplate from '@components/templates/Sign';
import { Locale } from '@config/i18n.config';
import ReactQueryProvider from '@context/ReactQueryProvider';
import { getDictionaryServerOnly } from '@dictionaries/default-dictionary-server-only';

export default async function Register({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionaryServerOnly(params?.lang);

  return (
    <SignTemplate hasi18n lang={params?.lang}>
      <ReactQueryProvider>
        <FormContainerRegister dictionary={dictionary} />
      </ReactQueryProvider>
    </SignTemplate>
  );
}
