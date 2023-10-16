import { theme } from '@/styles/theme';

export type ChatAvatarProps = {
  imageUrl?: string;
  text?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: keyof typeof theme.font.weight;
};
