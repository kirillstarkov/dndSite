import { t } from 'i18next';
import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/button/button';

// TEST COMPONENT
export const BugButton: FC = () => {
  const [error, setError] = useState(false);

  const throwBug = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={throwBug}>
      {t('Make a BUG')}
    </Button>
  );
};
