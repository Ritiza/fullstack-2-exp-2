import React, { useState } from "react";
import { Card, CardContent, TextField, Button, Typography, Box } from "@mui/material";

export default function Experiment3MUIForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`MUI Submitted: ${email}`);
    setEmail("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
      <Card sx={{ maxWidth: 480, width: "100%" }} elevation={3}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Material UI Form
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Card with TextField and Button using MUI components.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button type="submit" variant="contained">Send</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
