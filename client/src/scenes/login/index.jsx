import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { setMode } from "../../state";
import { useDispatch } from "react-redux";
import Scissor from "../../components/Scissor/Index";

const LoginPage = () => {
  const theme = useTheme();
  const { palette }=useTheme();
  const dispatch=useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SPLIT - IT
        </Typography>
        <button onClick={() => dispatch(setMode())}>jdaksj</button>
      </Box>
      <Box position='absolute' left='-70px'>
      <Scissor/>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" color={palette.primary.main} variant="h3" sx={{ mb: "1.5rem" }}>
        <b> Welcome to Split - it !! </b>
        </Typography>
        <Form />
      </Box>
     
    </Box>
  );
};

export default LoginPage;