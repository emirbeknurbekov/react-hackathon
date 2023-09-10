import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  editProduct,
  getOneProduct,
} from "../../store/products/ProductAction";
import { useNavigate, useParams } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function EditProductPage() {
  const { oneProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(oneProduct);
  const [formValue, setFormValue] = React.useState({
    title: "",
    picture: "",
    description: "",
    price: "",
    gender: "",
    category: "",
  });

  React.useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  React.useEffect(() => {
    if (oneProduct) {
      setFormValue(oneProduct);
    }
  }, [oneProduct]);

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formValue.title ||
      !formValue.picture ||
      !formValue.description ||
      !formValue.price ||
      !formValue.gender ||
      !formValue.category
    ) {
      alert("Fill all fields");
      return;
    }

    dispatch(editProduct({ ...formValue, price: +formValue.price }));
    navigate(-1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Title"
              name="title"
              value={formValue.title}
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="picture"
              label="Picture"
              value={formValue.picture}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              value={formValue.description}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              value={formValue.price}
              onChange={handleChange}
              type="number"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formValue.gender}
                label="Gender"
                name="gender"
                onChange={handleChange}
              >
                <MenuItem value={"women"}>Women</MenuItem>
                <MenuItem value={"men"}>Men</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formValue.category}
                label="Category"
                name="category"
                onChange={handleChange}
              >
                <MenuItem value={"shirts"}>Shirts</MenuItem>
                <MenuItem value={"hoodies"}>Hoodies</MenuItem>
                <MenuItem value={"jeans"}>Jeans</MenuItem>
                <MenuItem value={"activewear"}>Activewear</MenuItem>
                <MenuItem value={"boxers"}>Boxers</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
