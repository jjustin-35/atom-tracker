import { TimeNodeVariantType } from '@/constants/types/timenode';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WorkIcon from '@mui/icons-material/Work';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AddIcon from '@mui/icons-material/Add';

type IconComponentType = typeof QuestionMarkIcon;

const IconsData: Record<TimeNodeVariantType, IconComponentType> = {
  default: QuestionMarkIcon,
  food: RestaurantIcon,
  work: WorkIcon,
  game: SportsEsportsIcon,
  sports: FitnessCenterIcon,
  life: HomeIcon,
  others: CategoryIcon,
  add: AddIcon,
};

export default IconsData;