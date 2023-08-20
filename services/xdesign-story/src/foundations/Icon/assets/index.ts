import { FilledArrowDown } from './FilledArrowDown';
import { FilledArrowRight } from './FilledArrowRight';
import { FilledArrowLeft } from './FilledArrowLeft';
import { FilledArrowUp } from './FilledArrowUp';
import { FilledComment } from './FilledComment';
import { FilledDropdown } from './FilledDropdown';
import { FilledGear } from './FilledGear';
import { FilledHeart } from './FilledHeart';
import { FilledMenu } from './FilledMenu';
import { FilledXquare } from './FilledXquare';
import { OutlinedHeart } from './OutlinedHeart';
import { FilledHome } from './FilledHome';
import { OutlinedHome } from './OutlinedHome';
import { FilledCalendar } from './FilledCalendar';
import { OutlinedCalendar } from './OutlinedCalendar';
import { FilledFeed } from './FilledFeed';
import { OutlinedFeed } from './OutlinedFeed';
import { CheckListRightToLeft } from './CheckListRightToLeft';
import { CheckListLeftToRight } from './CheckListLeftToRight';
import { FilledDashBoard } from './FilledDashBoard';
import { OutlinedDashBoard } from './OutlinedDashBoard';
import { FilledEye } from './FilledEye';
import { OutlinedEye } from './OutlinedEye';

export const icons = {
    FilledHeart,
    OutlinedHeart,
    FilledGear,
    FilledMenu,
    FilledArrowLeft,
    FilledArrowRight,
    FilledArrowDown,
    FilledArrowUp,
    FilledDropdown,
    FilledComment,
    FilledXquare,
    FilledHome,
    OutlinedHome,
    FilledCalendar,
    OutlinedCalendar,
    FilledFeed,
    OutlinedFeed,
    CheckListRightToLeft,
    CheckListLeftToRight,
    FilledDashBoard,
    OutlinedDashBoard,
    FilledEye,
    OutlinedEye,
};

export type IconName = keyof typeof icons;

export const iconList = Object.keys(icons) as IconName[];
