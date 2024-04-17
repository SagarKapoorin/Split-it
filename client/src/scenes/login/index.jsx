import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "../../state";
function Login(){
    const theme=useTheme();
    const dispatch = useDispatch();
    return(
        <Box>
             <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
        <button onClick={() => dispatch(setMode())}>jdaksj</button>
            </Box>
        </Box>
    )
}
export default Login;