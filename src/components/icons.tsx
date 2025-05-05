import { LucideProps } from 'lucide-react';
import dynamic from 'next/dynamic';

export const Icons = {
  logo: dynamic(() => import('lucide-react').then(mod => mod.MessageSquareText)),
  close: dynamic(() => import('lucide-react').then(mod => mod.X)),
  spinner: dynamic(() => import('lucide-react').then(mod => mod.Loader2)),
  chevronDown: dynamic(() => import('lucide-react').then(mod => mod.ChevronDown)),
  google: dynamic(() => import('lucide-react').then(mod => mod.Chrome)),
  github: dynamic(() => import('lucide-react').then(mod => mod.Github)),
  twitter: dynamic(() => import('lucide-react').then(mod => mod.Twitter)),
  mail: dynamic(() => import('lucide-react').then(mod => mod.Mail)),
  bell: dynamic(() => import('lucide-react').then(mod => mod.Bell)),
  heart: dynamic(() => import('lucide-react').then(mod => mod.Heart)),
  comment: dynamic(() => import('lucide-react').then(mod => mod.MessageSquare)),
  repeat: dynamic(() => import('lucide-react').then(mod => mod.Repeat2)),
  share: dynamic(() => import('lucide-react').then(mod => mod.Share2)),
  image: dynamic(() => import('lucide-react').then(mod => mod.Image)),
  video: dynamic(() => import('lucide-react').then(mod => mod.Video)),
  more: dynamic(() => import('lucide-react').then(mod => mod.MoreHorizontal)),
  send: dynamic(() => import('lucide-react').then(mod => mod.Send)),
  home: dynamic(() => import('lucide-react').then(mod => mod.Home)),
  search: dynamic(() => import('lucide-react').then(mod => mod.Search)),
  plus: dynamic(() => import('lucide-react').then(mod => mod.Plus)),
  user: dynamic(() => import('lucide-react').then(mod => mod.User)),
};