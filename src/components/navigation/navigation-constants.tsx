import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';

const iconStyle = { height: '28px', width: '28px' };

export const navigationItems = [
  {
    title: 'Home',
    icon: <HomeIcon style={iconStyle} />,
    path: '/home'
  },
  {
    title: 'Explore',
    icon: <ExploreIcon style={iconStyle} />,
    path: '/explore'
  },
  {
    title: 'Notifications',
    icon: <NotificationsIcon style={iconStyle} />,
    path: '/notifications'
  },
  {
    title: 'Messages',
    icon: <MessageIcon style={iconStyle} />,
    path: '/messages'
  },
  { title: 'Lists', icon: <ListAltIcon style={iconStyle} />, path: '/lists' },
  {
    title: 'Communities',
    icon: <GroupIcon style={iconStyle} />,
    path: '/communities'
  },
  {
    title: 'Verified',
    icon: <VerifiedIcon style={iconStyle} />,
    path: '/verified'
  },
  {
    title: 'Profile',
    icon: <AccountCircleIcon style={iconStyle} />,
    path: '/profile '
  },
  { title: 'More', icon: <PendingIcon style={iconStyle} />, path: '/more' }
];
