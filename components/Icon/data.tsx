import { FC } from 'react';
import { TimeNodeVariantType } from '@/constants/types/timenode';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WorkIcon from '@mui/icons-material/Work';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';

const IconsData: Record<TimeNodeVariantType, FC> = {
  default: QuestionMarkIcon,
  food: RestaurantIcon,
  work: WorkIcon,
  game: SportsEsportsIcon,
  sports: FitnessCenterIcon,
  life: HomeIcon,
  others: CategoryIcon,
};

export default IconsData;