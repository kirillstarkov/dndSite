import { BugButton } from 'app/providers/error-boundry/ui/bug-button';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <h2>{t('Main Page')}</h2>
      <p>{t('Some sample text lorem ipsum sit aminu dolor ipsum ami')}</p>
      <BugButton />
    </div>
  );
};

export default MainPage;
