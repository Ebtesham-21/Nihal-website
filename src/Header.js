import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionOutlinedIcon from "@mui/icons-material/SubscriptOutlined";
import StoreFrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SuperVisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
                    alt=""
                />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" />

                </div>

            </div>
            <div className="header_center">
                <div className="header_option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StoreFrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SuperVisedUserCircleIcon fontSize="large" />
                </div>

            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar />
                    <h4>ssanga</h4>

                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>





            </div>



        </div>
    );
};

export default Header;