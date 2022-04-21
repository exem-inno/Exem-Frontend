import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import { Link } from "react-router-dom";

const ListItems = () => {
  return (
    <>
      <ListItemButton component={Link} to="/dashboard/cluster">
        <ListItemIcon>
          <HubOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Cluster" />
      </ListItemButton>
      <ListItemButton component={Link} to="/dashboard/http">
        <ListItemIcon>
          <SyncAltOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="HTTP" />
      </ListItemButton>
    </>
  );
};

export default ListItems;
