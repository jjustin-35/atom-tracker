import RestaurantIcon from '@mui/icons-material/Restaurant';
import WorkIcon from '@mui/icons-material/Work';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';

const IconsData = {
  food: RestaurantIcon,
  work: WorkIcon,
  game: SportsEsportsIcon,
  sports: FitnessCenterIcon,
  life: HomeIcon,
  others: CategoryIcon,
};

export type IconsType = keyof typeof IconsData;

export default IconsData;