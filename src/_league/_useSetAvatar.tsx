import { useEffect, useMemo, useState } from 'react';

export function useSetAvatar(leagueIndex: number, image: string): void {
  const element = document.querySelectorAll('article.league')[leagueIndex] as HTMLDivElement;
  const [avatar, setAvatar] = useState('');
  const memoizedAvatar = useMemo(() => avatar, [avatar]);
  useEffect(() => {
    if (image) {
      setAvatar(image);
      const replaced = `url("http://localhost:8000/images/${avatar}")`;
      element.style.setProperty('--avatar', replaced);
    }
  }, [memoizedAvatar, element, image, avatar]);
}
