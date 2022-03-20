import React, { useEffect } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useMetaMaskContext } from "../../common/contexts/metamask";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  const [buttonText, setButtonText] = React.useState(
    "Click here to install MetaMask!"
  );
  const { accounts, handleConnectWallet } = useMetaMaskContext();

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText("Connected");
      } else {
        setButtonText("Connect Wallet");
      }
    }
  }, [accounts]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ marginRight: "auto" }}>
            <Typography variant="h3" noWrap>
              Poplert
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={handleConnectWallet}>{buttonText}</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
