import check from './check.svg';
import close from './x.svg';
import fileAdd from './file-plus.svg';
import fileRemove from './file-minus.svg';
import menu from './menu.svg';
import play from './play-circle.svg';
import right from './chevron-right.svg';
import stop from './stop-circle.svg';
import github from './github.svg';

const icons = {
  check,
  close,
  fileAdd,
  fileRemove,
  menu,
  play,
  right,
  stop,
  github,
};

export type IconName = keyof typeof icons;
export { icons };
