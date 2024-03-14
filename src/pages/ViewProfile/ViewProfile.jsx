import React, { useState } from "react";
import {
  Typography,
  Button,
  Drawer,
  Divider,
  Box,
  useMediaQuery,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  DialogTitle,
  Checkbox,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ViewProfile = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      productCategoryId: 0,
      productSubCategoryId: 0,
      name: "string",
      description:
        "Grade A 1kg Rs.2,500 Grade B 1kg Rs.2,000 can supply 100kg per week. packaging can be done any size. we do not deliver. ",
      price: 0,
      supplyQuantity: 0,
      unitType: 0,
      monthlySupplyQuantity: 0,
      monthlyMinimumQuantity: 0,
      otherDetails: "string",
    },
    {
      productCategoryId: 0,
      productSubCategoryId: 0,
      name: "string",
      description:
        "Grade A 1kg Rs.2,500 Grade B 1kg Rs.2,000 can supply 100kg per week. packaging can be done any size. we do not deliver. ",
      price: 0,
      supplyQuantity: 0,
      unitType: 0,
      monthlySupplyQuantity: 0,
      monthlyMinimumQuantity: 0,
      otherDetails: "string",
    },
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Grid container pl={1}>
      <Grid item xs={12}>
        <Typography variant="h5" mt={2}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon style={{ color: "black" }} />
          </IconButton>{" "}
          Basic Details
        </Typography>
        <Grid container>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Selected language
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : English
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Province
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : Western
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              District
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : Colombo
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              City
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : Wattala
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Name
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : Kasun Pathmaperuma
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Name
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : Kasun Pathmaperuma
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Primary contact
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : 0771978590
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Secondary contact
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : 0770256987
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Email
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : kasunkalhara01@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Address
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : No:333/55, St Anthony mawatha, Kerawalapitiya
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Google map URL
            </Typography>
          </Grid>
          <Grid item xs={9} lg={10}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : https://www.google.com/maps?authuser=0
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Typography variant="h5" mt={2}>
          Product Details
        </Typography>
        <Grid container mt={2}>
          {products.map((product, index) => (
            <Grid item sx={12} md={6} lg={4} key={index} p={1}>
              <Grid
                container
                sx={{
                  boxShadow: "0px 3px 8px 4px rgba(0, 0, 0, 0.05)",
                  borderRadius: 1,
                  p: 3,
                  bgcolor: "#FFFFFF",
                  minHeight: 250,
                }}
              >
                <Grid item xs={9}>
                  {product.productOrRaw ? (
                    <>
                      <Typography fontWeight={600} variant="h6">
                        gf
                        {"ds" && " - " + "sdf"}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography fontWeight={600} variant="h6">
                        {"fds"}
                        {" - "}
                        Raw Material
                      </Typography>
                    </>
                  )}
                </Grid>
                <Grid
                  item
                  xs={3}
                  display={"flex"}
                  justifyContent={"end"}
                  alignItems={"start"}
                >
                  <IconButton
                    size="small"
                    //   onClick={() => handleEditClick(index)}
                  >
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    mt={product?.description ? 2 : 0}
                    fontWeight={500}
                    fontSize={16}
                  >
                    Product Description
                  </Typography>
                  <Typography mt={1}>{product?.description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" mt={2}>
          Other Details
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Have you registered your business?
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography color={"primary.main"} fontWeight={500} mt={3}>
              : Yes
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Business Type
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : Private Limited company
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Business name
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : NC Natural Products Private Limited
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Do you have any quality certificates?
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography color={"primary.main"} fontWeight={500} mt={3}>
              : Yes
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Quality certificates
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : GMP, HACCP, SLS, ISO 22000
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Are you presently exporting your product?
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography color={"primary.main"} fontWeight={500} mt={3}>
              : Yes
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Countries
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              : USA, Japan, Canada, India, Dubai
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography color={"#4D4D4D"} fontWeight={500} mt={3}>
              Would you be open to supplying your product for us to handle the
              export process?
            </Typography>
          </Grid>
          <Grid item xs={9} display={"flex"} alignItems={"center"}>
            <Typography color={"primary.main"} fontWeight={500} mt={3}>
              : Yes
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewProfile;
