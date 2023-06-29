import * as React from 'react';
import { Fragment, useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function ContactContent() {
  const [emailValidation, setEmailValidation] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [textInput, setTextInput] = useState("");
  const [textHelper, setTextHelper] = useState("Remaining Length: 1500");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [errorMsg, setErrorMsg] = useState("");
  const form = useRef();

  const handleTextFieldChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleMsgChange = (event) => {
    setTextInput(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    emailjs.sendForm('service_hofuskv', 'template_jpwgggw', form.current, 'gNXJ6Qe3GteWPlt9_')
    .then((result) => {
        setOpen(true);
        setSeverity("success");
        setErrorMsg("Submission Successful");
        setInterval(() => {
          window.location.reload();
        }, 2000);
    }, (error) => {
      setOpen(true);
      setSeverity("error");
      setErrorMsg("Submission Failed");
    });
  };

  useEffect(() => {
    if (emailInput.length > 0) {
      if (emailInput.includes('@')) {
        setEmailValidation(false);
        setEmailHelper("");
      } else {
        setEmailValidation(true);
        setEmailHelper("Invalid email address format.");
      }
    } else {
      return;
    };
  }, [emailInput]);

  useEffect(() => {
    if (textInput.length > 0) {
      const deduct = textInput.length;
      let remaining = 1500 - deduct;
      if (remaining === 0) {
        setTextHelper("Remaining Length: 0");
      } else {
        setTextHelper("Remaining Length: " + remaining);
      };
    } else {
      setTextHelper("Remaining Length: 1500");
    }
  }, [textInput]);

  const DescriptionAlert = (props) => {
    const { open, severity, errorMsg } = props;
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Collapse in={open}>
          <Alert
            severity={severity}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>{errorMsg}</AlertTitle>
            {severity === "success" ?
              <>
                Your e-mail has been sent!
              </> :
              <>
                Oops! Something went wrong while sending you e-mail. You can also reach out to me at dntjdgur@gmail.com. Sorry for the inconvenience!
              </>}
          </Alert>
        </Collapse>
      </Stack>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <DescriptionAlert open={open} severity={severity} errorMsg={errorMsg}/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <SendIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: 'black' }}>
            Send Message
          </Typography>
          <br/>
          <form ref={form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="user_name"
                  fullWidth
                  id="name"
                  label="Name"
                  inputProps={{ maxLength: 100 }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="user_email"
                  autoComplete="email"
                  inputProps={{ maxLength: 100 }}
                  error={emailValidation}
                  onChange={handleTextFieldChange}
                  helperText={emailHelper}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                  inputProps={{ maxLength: 1500 }}
                  onChange={handleMsgChange}
                  helperText={textHelper}
                  multiline
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}