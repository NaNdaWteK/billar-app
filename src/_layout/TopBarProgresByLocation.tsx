import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarProgress } from '../__core/ui/bar_progress/BarProgress';

const TopBarProgressByLocation = () => {
  const [progress, setProgress] = useState(false);
  const [previousLocation, setPreviousLocation] = useState('');
  const location = useLocation();
  useEffect(() => {
    setPreviousLocation(location.pathname);
    setProgress(true);
    const hasClickedOnALinkToTheCurrentPage =
      location.pathname === previousLocation;
    if (hasClickedOnALinkToTheCurrentPage) {
      setPreviousLocation('');
    }
  }, [location]);
  useEffect(() => {
    const disableTopBar = () => {
      setProgress(false);
    };

    document.addEventListener('pageLoaded', disableTopBar);

    return () => {
      document.removeEventListener('pageLoaded', disableTopBar);
    };
  }, []);

  if (!progress) {
    return <></>;
  }

  return <BarProgress />;
};

export default TopBarProgressByLocation;
