import React, { useState, useEffect, useRef } from "react";
import VerificationStepper from "../../components/VerificationStepper/VerificationStepper";
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
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddProducts from "../../components/AddProduct/AddProducts";

const ProductDetails = () => {
  const dialogContentRef = useRef(null);
  const drawerContentRef = useRef(null);
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
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
  //------------------Buttons functions --------------------------------//

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleRejectButtonClick = () => {
    navigate("./../../");
  };

  const handleFinishLaterButtonClick = () => {
    navigate("./../../");
  };

  const handleSaveButtonClick = () => {
    navigate("./../OtherDetails");
  };

  //------------Handle product drawer---------------------------------------//
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //------------handle edit delete function --------------------------------//
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(0);
  const handleEditClick = (index) => {
    // dispatch(setSelectedProductIndex(index));
    // setIsDrawerOpen(true);
  };

  const handleDeleteClick = () => {
    // const updatedProductDetails = [...products];
    // updatedProductDetails.splice(deleteIndex, 1);

    // dispatch(setProductDetails(updatedProductDetails));

    handleCloseDelete();
  };

  const handleClickOpenDelete = (index) => {
    setDeleteIndex(index);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  return (
    <Grid container minHeight={"85svh"} pr={2}>
      <Grid item xs={12}>
        <VerificationStepper currentStep={2} />
        <Typography variant="h4" mt={2}>
          Basic Details
        </Typography>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <Grid container gap={3}>
              {products.map((product, index) => (
                <Grid
                  item
                  xs={3.8}
                  key={index}
                  sx={{
                    boxShadow: "0px 3px 8px 4px rgba(0, 0, 0, 0.05)",
                    borderRadius: 1,
                    mt: 2,
                    p: 3,
                    bgcolor: "#FFFFFF",
                    minHeight: 250,
                  }}
                >
                  <Grid container>
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
                      alignItems={"center"}
                      gap={3}
                    >
                      <IconButton
                        size="small"
                        onClick={() => handleClickOpenDelete(index)}
                      >
                        <DeleteForeverIcon fontSize="medium" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleEditClick(index)}
                      >
                        <BorderColorIcon fontSize="small" />
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

          <Grid item xs={12} display={"flex"} justifyContent={"center"} mt={4}>
            <Button
              variant="outlined"
              sx={{ width: 250, height: 50 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <Typography fontWeight={600} fontSize={14}>
                Add Product
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} display={"flex"} alignItems={"center"} mt={2}>
            <Checkbox
              checked={verified}
              onChange={(e) => setVerified(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Product details are verified</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} display={"flex"} alignItems={"end"}>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={3} lg={2.4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleBackButtonClick}
            >
              <Typography fontWeight={600} pt={1} pb={1}>
                Back
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={0}
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
            lg={2.4}
          ></Grid>
          <Grid item xs={3} lg={2.4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleRejectButtonClick}
            >
              <Typography fontWeight={600} pt={1} pb={1}>
                Reject
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3} lg={2.4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleFinishLaterButtonClick}
            >
              <Typography fontWeight={600} pt={1} pb={1}>
                Finish later
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3} lg={2.4}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleSaveButtonClick}
            >
              <Typography fontWeight={600} pt={1} pb={1}>
                Save & Continue
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={openDelete}
        onClose={() => handleCloseDelete(false)}
        aria-labelledby="add-product-modal"
        maxWidth="xs"
        slotProps={{
          backdrop: {
            sx: {
              background: "rgba(0,0,0,0.7)",
            },
          },
        }}
      >
        <DialogTitle>
          <Typography fontSize={16} fontWeight={600}>
            Are you sure to delete?
          </Typography>
        </DialogTitle>
        <DialogContent ref={dialogContentRef}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            pt={2}
            pl={2}
            pr={2}
          >
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleCloseDelete(false)}
            >
              No
            </Button>
            <Button
              size="small"
              // color="error"
              variant="contained"
              onClick={() => handleDeleteClick()}
            >
              Yes
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        aria-labelledby="add-product-modal"
        fullWidth
        maxWidth="lg"
        PaperProps={{
          style: {
            backgroundColor: "#F9FAFB",
            // boxShadow: "none",
            padding:-5
          },
        }}
        slotProps={{
          backdrop: {
            sx: {
              background: "rgba(0,0,0,0.5)",
            },
          },
        }}
      >
        <DialogContent ref={dialogContentRef}>
          <Box
            sx={{
              bgcolor: "#F9FAFB",
              m:-2
            }}
          >
            <AddProducts />
          </Box>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default ProductDetails;
