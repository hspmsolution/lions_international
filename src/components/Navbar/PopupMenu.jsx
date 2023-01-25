import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { MenuItem } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

//tooltip function to show menu item on hover and on click

const HtmlTooltip = styled(({ className, isMatch, ...props }) => (
  <Tooltip
    leaveTouchDelay={6000}
    enterTouchDelay={0}
    placement={ "bottom"}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    borderRadius:"8px",
    boxShadow:"rgb(0 0 0 / 28%) 0px 0px 13px 0px"
  },
}));

//mapping popup menu items
const PopupMenu = ({ name, menuItems }) => {
  
  return (
     

    <div>
      <HtmlTooltip
         
        title={menuItems.map((items) => (
         
          <MenuItem key={items}>{items}</MenuItem>
        ))}
      >
        <Button
          endIcon={<KeyboardArrowDown />}
          fullWidth
         
          style={{
            textDecoration: 'none',
            alignItems: 'center !important',
            color: '#fff',
            textTransform: 'none',
            padding: '0',
            fontWeight: 600,
            fontSize: 15,
            fontFamily: '"Open Sans", sans-serif'
          }}
        >
          {name}
        </Button>
      </HtmlTooltip>
    </div>
  );
};

export default PopupMenu;


    