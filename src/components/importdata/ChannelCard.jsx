import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardContent,
  IconButton,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import PropTypes from "prop-types";

const ChannelCard = ({ brand, channel, avatarText, subHeader, content }) => {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{avatarText}</Avatar>}
        title={
          <Typography variant="h6">
            {brand} {channel}
          </Typography>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        subheader={subHeader}
      ></CardHeader>
      <CardContent sx={{ pt: 0 }}>{content}</CardContent>
    </Card>
  );
};

ChannelCard.propTypes = {
  brand: PropTypes.string,
  channel: PropTypes.string,
  avatarText: PropTypes.string,
  subHeader: PropTypes.string,
  content: PropTypes.element,
};

export default ChannelCard;
