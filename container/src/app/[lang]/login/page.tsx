import FormContainerLogin from '@components/organisms/Login/FormContainer';
import SignTemplate from '@components/templates/Sign';
import { Locale } from '@config/i18n.config';
import { getDictionaryServerOnly } from '@dictionaries/default-dictionary-server-only';

export default async function Login({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionaryServerOnly(params?.lang);

  return (
    <SignTemplate hasi18n lang={params?.lang}>
      <FormContainerLogin dictionary={dictionary} />
    </SignTemplate>
  );
}
