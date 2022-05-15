import { useHistory, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns'
import Avatar from '@mui/material/Avatar'
import { useTheme } from '@mui/styles';

const drawerWidth = 240

function Layout ({ children }) {
    const history = useHistory()
    const location = useLocation()
    const theme = useTheme()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/create'
        },
    ]

    return (
        <Box sx={{display: 'flex'}}>
            {/* app bar */}
            <AppBar
                elevation={0}
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    backgroundColor: '#fff',
                    color: '#333'
                }}
            >
                <Toolbar
                    sx={{
                        backgroundColor: 'transparent'
                    }}
                >
                    <Typography
                        sx={{flexGrow: 1}}
                    >
                        Today is the {format(new Date(), 'do MMM Y')}
                    </Typography>

                    <Typography>
                        Mario
                    </Typography>
                    <Avatar 
                        src='/mario-av.png'
                        sx={{
                            marginLeft: theme.spacing(2)
                        }}
                    />
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer 
                variant="permanent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {width: drawerWidth},
                }}
            >
                <div>
                    <Typography 
                        variant="h5"
                        sx={{
                            padding: '16px'
                        }}
                    >
                        My Notes
                    </Typography>
                </div>

                {/* list/ links */}
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem 
                            button
                            key={index}
                            onClick={() => {
                                history.push(item.path)
                            }}
                            sx={location.pathname == item.path ? {backgroundColor: '#f4f4f4'} : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            {/* pages */}
            <div className="page">
                {children}
            </div>

        </Box>
    )
}

export default Layout
