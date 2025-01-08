import { List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => (
    <div style={{
        width: '250px',
        backgroundColor: '#2C3E50',
        color: 'white',
        paddingTop: '20px',
        height: '100%',
        position: 'fixed',
        left: 0, // Ensure it's aligned to the left
    }}>
        <List>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/">
                    <ListItemText primary="Order List" />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/create">
                    <ListItemText primary="Create Order" />
                </ListItemButton>
            </ListItem>
            <Divider />
        </List>
    </div>
);

export default Sidebar;
