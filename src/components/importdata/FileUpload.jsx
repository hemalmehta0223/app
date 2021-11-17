import { IconButton, Box, Button, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { AttachFile } from "@material-ui/icons";
import { makeStyles, createStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    boxRoot: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    deleteIconButton: {
      padding: theme.spacing(0),
    },
    button: {
      marginRight: theme.spacing(1),
    },
  })
);

const FileUpload = ({ id }) => {
  const classes = useStyles();
  const [fileName, setFileName] = useState("");

  const handleFileSelect = (e) => {
    setFileName(e.target.value);
  };

  const handleFileDelete = () => {
    setFileName("");
  };

  return (
    <>
      <Box className={classes.boxRoot}>
        <input
          accept="image/*"
          hidden
          id={id}
          multiple
          type="file"
          onChange={handleFileSelect}
          value={fileName}
        />
        <label htmlFor={id}>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<AttachFile />}
            component="span"
            className={classes.button}
          >
            Upload
          </Button>
        </label>
        {fileName && (
          <>
            <Typography variant="body2">{fileName}</Typography>
            <IconButton
              className={classes.deleteIconButton}
              onClick={handleFileDelete}
            >
              <Delete />
            </IconButton>
          </>
        )}
      </Box>
    </>
  );
};

export default FileUpload;
