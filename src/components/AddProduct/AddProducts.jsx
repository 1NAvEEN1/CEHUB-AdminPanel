import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Divider,
  Box,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Autocomplete,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setProductCategoryNames,
//   setProductDetails,
//   setSelectedProductIndex,
// } from "../reducers/formSlice";
// import store from "../app/store";
// import { showAlertMessage } from "../app/alertMessageController";
import {
  GetProductCategories,
  GetProductSubCategories,
} from "../../services/CategoryService";

const initialShadow = "1px 5px 8px 5px rgba(0, 0, 0, 0.05)";
const errorShadow = "-1px 1px 8px 5px rgba(255, 0, 0, 0.3)";

const CustomStyledBox = ({ children, sx = {}, ...rest }) => (
  <Box
    sx={{
      borderRadius: 2,
      pt: 1,
      pr: 0,
      pb: 1,
      ...sx, // Merge with additional styles passed through sx prop
    }}
    {...rest}
  >
    {children}
  </Box>
);

const AddProducts = ({ closeDrawer }) => {
  // const dispatch = useDispatch();
  // const { t, i18n } = useTranslation();
  // const formData = useSelector((state) => state.form.formData);
  // const categoryNames = useSelector((state) => state.form.productCategoryNames);
  const formData = {};
  const categoryNames = {};
  const initialMonths = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const defaultValues = {
    productOrRaw: true,
    productCategoryId: 0,
    productSubCategoryId: 0,
    name: "",
    description: "",
    price: 0,
    supplyQuantity: 0,
    unitType: 0,
    monthlySupplyQuantity: 0,
    monthlyMinimumQuantity: 0,
    otherDetails: "",
    supplyFrequency: true,
    jan: false,
    feb: false,
    mar: false,
    apr: false,
    may: false,
    jun: false,
    jul: false,
    aug: false,
    sep: false,
    oct: false,
    nov: false,
    dec: false,
  };

  const [product, setProduct] = useState(defaultValues);
  const [error, setError] = useState("");

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [subCategoriesLoading, setSubCategoriesLoading] = useState(false);

  const getCategories = async () => {
    try {
      setCategoriesLoading(true);
      const response = await GetProductCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching Categories:", error);
    } finally {
      setCategoriesLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getSubCategories = async () => {
    try {
      setSubCategoriesLoading(true);
      const response = await GetProductSubCategories(product.productCategoryId);
      if (response.data.length == 0) {
        setSubCategories([0]);
      } else {
        setSubCategories(response.data);
      }
    } catch (error) {
      console.error("Error fetching SubCategories:", error);
    } finally {
      setSubCategoriesLoading(false);
    }
  };

  useEffect(() => {
    if (product.productCategoryId !== 0) {
      getSubCategories();
    }
  }, [product.productCategoryId]);

  // useEffect(() => {
  //   const selectedProductIndex = store.getState().form.selectedProductIndex;
  //   if (selectedProductIndex !== 99) {
  //     setProduct(
  //       store.getState().form.formData?.productDetails[selectedProductIndex]
  //     );
  //   }
  // }, [store.getState().form.selectedProductIndex]);

  // const handleChange = (key, value, subKey = null) => {
  //   setError("");

  //   if (subKey) {
  //     setProduct((prevProduct) => ({
  //       ...prevProduct,
  //       [key]: { ...prevProduct[key], [subKey]: value },
  //     }));
  //   } else {
  //     setProduct((prevProduct) => ({
  //       ...prevProduct,
  //       [key]: value,
  //       // Reset subCategory to 0 if key is "category"
  //       ...(key === "productCategoryId" && { productSubCategoryId: 0 }),
  //     }));
  //   }
  // };

  // Function to toggle selection of a month
  const handleChange = (key, value, subKey = null) => {
    setError("");

    if (subKey) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [key]: { ...prevProduct[key], [subKey]: value },
      }));
    } else if (key === "supplyMonths") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [value]: !prevProduct[value],
        // supplyMonths: {
        //   ...prevProduct.supplyMonths,
        //   [value]: !prevProduct.supplyMonths[value],
        // },
      }));
    } else if (key === "supplyFrequency") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [key]: value,
        ...(value === false && {
          jan: false,
          feb: false,
          mar: false,
          apr: false,
          may: false,
          jun: false,
          jul: false,
          aug: false,
          sep: false,
          oct: false,
          nov: false,
          dec: false,
        }),
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [key]: value,
        ...(key === "productCategoryId" && { productSubCategoryId: 0 }),
      }));
    }
  };

  const renderMonthSelection = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      <Grid container spacing={2} maxWidth={350}>
        {months.map((month) => (
          <Grid key={month} item xs={3} display="flex" justifyContent="center">
            <Box
              bgcolor={product[month.toLowerCase()] ? "#F47621" : "#D5D8DC"}
              onClick={() => handleChange("supplyMonths", month.toLowerCase())}
              sx={{
                borderRadius: 2,
                width: 60,
                height: 40,
                "&:hover": {
                  cursor: "pointer",
                  border: "2px solid #F47621",
                },
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography textAlign="center">{month.toLowerCase()}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };

  const validation = () => {
    if (product.productCategoryId == 0) {
      showAlertMessage({
        message: "Please select a product category !",
        type: "error",
      });
      setError("category");
      return 0;
    }

    if (product.productOrRaw && subCategories[0] != 0) {
      if (product.productSubCategoryId == 0) {
        showAlertMessage({
          message: "Please select a product subcategory !",
          type: "error",
        });
        setError("subCategory");
        return 0;
      }
    }

    // if (product.name == "") {
    //   showAlertMessage({
    //     message: "Please enter the product name !",
    //     type: "error",
    //   });
    //   setError("name");
    //   return 0;
    // }

    // if (product.price == "") {
    //   showAlertMessage({
    //     message: "Please enter the product price !",
    //     type: "error",
    //   });
    //   setError("price");
    //   return 0;
    // } else if (product.supplyQuantity == "") {
    //   showAlertMessage({
    //     message: "Please enter the price unit quantity!",
    //     type: "error",
    //   });
    //   setError("unit");
    //   return 0;
    // }

    // if (product.monthlySupplyQuantity == "") {
    //   showAlertMessage({
    //     message: "Please enter the monthly supply quantity !",
    //     type: "error",
    //   });
    //   setError("supplyQty");
    //   return 0;
    // }

    // if (!product.supplyFrequency && product.every((month) => month === false)) {
    //   showAlertMessage({
    //     message: "Please select the month range !",
    //     type: "error",
    //   });
    //   return 0;
    // }

    if (
      !product.supplyFrequency &&
      initialMonths.every((month) => product[month] === false)
    ) {
      showAlertMessage({
        message: "Please select the month range !",
        type: "error",
      });
      return 0;
    }

    return 1;
  };

  const save = () => {
    console.log(product);
    let ProductDetails = { ...product };

    if (product.supplyFrequency) {
      initialMonths.forEach((month) => {
        ProductDetails[month] = true;
      });
    }
    delete ProductDetails[""];
    console.log(ProductDetails);
    const isValidate = validation();
    if (isValidate) {
      const updatedProductDetails = [...formData.productDetails];
      const updatedProductCategoryNames = [...categoryNames];

      const categoryNamesObject = {
        category: categories.find(
          (category) => category.id === ProductDetails.productCategoryId
        ),
        subCategory: subCategories.find(
          (subCategory) =>
            subCategory.id === ProductDetails.productSubCategoryId
        ),
      };

      if (store.getState().form.selectedProductIndex !== 99) {
        // Update the existing object in the array
        updatedProductDetails[store.getState().form.selectedProductIndex] =
          ProductDetails;

        updatedProductCategoryNames[
          store.getState().form.selectedProductIndex
        ] = categoryNamesObject;
      } else {
        // Add a new object to the array
        updatedProductDetails.push(ProductDetails);
        updatedProductCategoryNames.push(categoryNamesObject);
      }
      // dispatch(setProductDetails(updatedProductDetails));
      // dispatch(setProductCategoryNames(updatedProductCategoryNames));
      setProduct(defaultValues);
      // dispatch(setSelectedProductIndex(99));
      closeDrawer();
    }
  };

  const Discard = () => {
    setProduct(defaultValues);
    // dispatch(setSelectedProductIndex(99));
    closeDrawer();
  };
  return (
    <Box>
      <Grid
        container
        sx={{
          minHeight: "90svh",
          p: 2,
        }}
      >
        <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
          Product or row martial?
        </Typography>
        <Grid item xs={12}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={product.productOrRaw.toString()}
            onChange={(e) => (
              handleChange("productOrRaw", e.target.value === "true"),
              e.target.value === "false" &&
                handleChange("productSubCategoryId", 0)
            )}
            name="radio-buttons-group"
          >
            <Grid container spacing={5} mt={-3} ml={-2}>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={16}>
                    Product
                  </Typography>{" "}
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  maxWidth={250}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={600} fontSize={16}>
                    Raw material
                  </Typography>
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    labelPlacement="start"
                  />
                </Box>
              </Grid>
            </Grid>
          </RadioGroup>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={6} lg={4}>
              <CustomStyledBox
                sx={{
                  boxShadow: error === "category" ? errorShadow : initialShadow,
                }}
              >
                <Typography fontWeight={600} color="primary" pl={2}>
                  Product category
                </Typography>
                <FormControl fullWidth>
                  <Autocomplete
                    value={
                      categories.find(
                        (category) => category.id === product.productCategoryId
                      ) || null
                    }
                    size="small"
                    options={categories}
                    getOptionLabel={(option) => option.nameEnglish}
                    onChange={(_, newValue) => {
                      handleChange(
                        "productCategoryId",
                        newValue ? newValue.id : 0
                      );
                      setSubCategories([]);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder={"Select a product category"}
                        sx={{
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          borderRadius: 3,
                          height: 40,
                        }}
                      />
                    )}
                    loading={categoriesLoading} // Add loading prop
                  />
                </FormControl>
              </CustomStyledBox>
            </Grid>{" "}
            {product.productOrRaw && subCategories[0] != 0 && (
              <Grid item xs={12} md={6} lg={4}>
                <CustomStyledBox
                  sx={{
                    boxShadow:
                      error === "subCategory" ? errorShadow : initialShadow,
                  }}
                >
                  <Typography fontWeight={600} color="primary" pl={2}>
                    Sub category
                  </Typography>
                  <FormControl fullWidth>
                    <Autocomplete
                      value={
                        subCategories.find(
                          (subCategory) =>
                            subCategory.id === product.productSubCategoryId
                        ) || null
                      }
                      size="small"
                      options={subCategories}
                      getOptionLabel={(option) => option.nameEnglish}
                      onChange={(_, newValue) => {
                        handleChange(
                          "productSubCategoryId",
                          newValue ? newValue.id : 0
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder={"Select a sub category"}
                          sx={{
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
                            borderRadius: 3,
                            height: 40,
                          }}
                        />
                      )}
                      disabled={product.productCategoryId === 0}
                      loading={subCategoriesLoading} // Add loading prop
                    />
                  </FormControl>
                </CustomStyledBox>
              </Grid>
            )}
            <Grid item xs={12} md={6} lg={4}>
              <CustomStyledBox
                sx={{
                  boxShadow: error === "name" ? errorShadow : initialShadow,
                  height: "100%",
                }}
              >
                <Typography color="primary" pl={2} fontWeight={600}>
                  Product name
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
                  placeholder="Product name"
                  fullWidth
                  value={product.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                ></TextField>
              </CustomStyledBox>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} mt={5}>
          <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mb={2}>
            Price range
          </Typography>
          <Grid container>
            <Grid item xs={12} display={"flex"} gap={3}>
              <CustomStyledBox
                sx={{
                  boxShadow: error === "price" ? errorShadow : initialShadow,
                  maxWidth: 200,
                }}
              >
                <Typography color="primary" pl={2}>
                  Price (Rupees)
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    pl: 2,
                    pr: 2,
                  }}
                  placeholder="0000"
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.price}
                  onChange={(e) => {
                    const value = Math.max(0, e.target.value);
                    handleChange("price", value);
                  }}
                ></TextField>
              </CustomStyledBox>
              <CustomStyledBox
                sx={{
                  boxShadow: error === "unit" ? errorShadow : initialShadow,
                  width: 160,
                }}
              >
                <Typography color="primary" pl={2} mb={0}>
                  Quantity unit
                </Typography>
                <FormControl fullWidth>
                  <Select
                    sx={{
                      boxShadow: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      borderRadius: 1,
                    }}
                    size="small"
                    value={product.unitType}
                    onChange={(e) => handleChange("unitType", e.target.value)}
                  >
                    <MenuItem value={0}>Kilogram (kg)</MenuItem>
                    <MenuItem value={1}>Gram (g)</MenuItem>
                    <MenuItem value={2}>Milligram (mg)</MenuItem>
                    <MenuItem value={3}>Milliliter (ml)</MenuItem>
                    <MenuItem value={4}>Liter (l)</MenuItem>
                    <MenuItem value={5}>Packet</MenuItem>
                    <MenuItem value={6}>Unit</MenuItem>
                  </Select>
                </FormControl>
              </CustomStyledBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mb={2}>
            Monthly Supply Quantity & MOQ
          </Typography>
          <Grid container>
            <Grid item xs={12} display={"flex"} gap={3}>
              <CustomStyledBox
                sx={{
                  boxShadow: error === "price" ? errorShadow : initialShadow,
                  maxWidth: 180,
                }}
              >
                <Typography color="primary" pl={2}>
                  Quantity
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    pl: 2,
                    pr: 2,
                  }}
                  placeholder="00"
                  type="number"
                  inputProps={{
                    style: { fontWeight: "bold" },
                  }}
                  value={product.supplyQuantity}
                  onChange={(e) => {
                    const value = Math.max(0, e.target.value);
                    handleChange("supplyQuantity", value);
                  }}
                ></TextField>
              </CustomStyledBox>
              <CustomStyledBox
                sx={{
                  boxShadow: error === "unit" ? errorShadow : initialShadow,
                  width: 180,
                }}
              >
                <Typography color="primary" pl={2} mb={0}>
                  MOQ
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    pl: 2,
                    pr: 2,
                  }}
                  placeholder="00"
                  type="number"
                  inputProps={{
                    style: { fontWeight: "bold" },
                  }}
                  value={product.monthlySupplyQuantity}
                  onChange={(e) => {
                    const value = Math.max(0, e.target.value);
                    handleChange("monthlySupplyQuantity", value);
                  }}
                ></TextField>
              </CustomStyledBox>
            </Grid>
          </Grid>
        </Grid>

        {/*  <Grid item xs={12} mt={3}>
          <Typography fontWeight={600}>
            {t("translation:AddProduct:supplyQuantity")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomStyledBox
                sx={{
                  boxShadow:
                    error === "supplyQty" ? errorShadow : initialShadow,
                }}
              >
                <Typography color="primary" pl={2}>
                  Quantity
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    pl: 2,
                    pr: 2,
                  }}
                  placeholder="0000"
                  fullWidth
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.monthlySupplyQuantity}
                  onChange={(e) => {
                    const value = Math.max(0, e.target.value); // Ensure non-negative value
                    handleChange("monthlySupplyQuantity", value);
                  }}
                ></TextField>
              </CustomStyledBox>
            </Grid>
           <Grid item xs={6}>
              <CustomStyledBox height={85}>
                <Typography color="primary" pl={2} mb={0}>
                  Quantity unit
                </Typography>
                <Grid container>
                  <Grid item xs={5} mb={3}>
                    <TextField
                      size="small"
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      placeholder="000"
                      fullWidth
                      inputProps={{ style: { fontWeight: "bold" } }}
                      value={product.supply.supplyQtyUnitValue}
                      onChange={(e) =>
                        handleChange(
                          "supply",
                          e.target.value,
                          "supplyQtyUnitValue"
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={7} mt={0.5}>
                    <FormControl fullWidth>
                      <Select
                        id="demo-simple-select"
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          borderRadius: 3,
                          height: 30,
                        }}
                        value={product.supply.supplyQtyUnit}
                        onChange={(e) =>
                          handleChange(
                            "supply",
                            e.target.value,
                            "supplyQtyUnit"
                          )
                        }
                      >
                        <MenuItem value={10}>kg</MenuItem>
                        <MenuItem value={20}>gram</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CustomStyledBox>
            </Grid> 
          </Grid>
        </Grid>*/}

        {/*     <Grid item xs={12} mt={3}>
          <Typography fontWeight={600}>
            {t("translation:AddProduct:orderQuantity")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomStyledBox
                sx={{
                  boxShadow: initialShadow,
                }}
              >
                <Typography color="primary" pl={2}>
                  Quantity
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    pl: 2,
                    pr: 2,
                  }}
                  placeholder="0000"
                  fullWidth
                  type="number"
                  inputProps={{ style: { fontWeight: "bold" } }}
                  value={product.monthlyMinimumQuantity}
                  onChange={(e) => {
                    const value = Math.max(0, e.target.value);
                    handleChange("monthlyMinimumQuantity", value);
                  }}
                ></TextField>
              </CustomStyledBox>
            </Grid>
          <Grid item xs={6}>
              <CustomStyledBox height={85}>
                <Typography color="primary" pl={2} mb={1}>
                  Quantity unit
                </Typography>
                <Grid container>
                  <Grid item xs={5} mb={3}>
                    <TextField
                      size="small"
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      }}
                      placeholder="000"
                      fullWidth
                      inputProps={{ style: { fontWeight: "bold" } }}
                      value={product.order.orderQtyUnitValue}
                      onChange={(e) =>
                        handleChange(
                          "order",
                          e.target.value,
                          "orderQtyUnitValue"
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={7} mt={0.5}>
                    <FormControl fullWidth>
                      <Select
                        id="demo-simple-select"
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          borderRadius: 3,
                          height: 30,
                        }}
                        value={product.order.orderQtyUnit}
                        onChange={(e) =>
                          handleChange("order", e.target.value, "orderQtyUnit")
                        }
                      >
                        <MenuItem value={10}>kg</MenuItem>
                        <MenuItem value={20}>gram</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CustomStyledBox>
            </Grid> 
          </Grid>
        </Grid>
*/}
        <Grid item xs={12} mt={3}>
          <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
            Supply Frequency?
          </Typography>
          <FormControl fullWidth sx={{ pl: 2, pr: 2, mb: -2 }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={product.supplyFrequency.toString()}
              onChange={(e) => (
                handleChange("supplyFrequency", e.target.value === "true"),
                e.target.value === "true" && handleChange("supplyMonths", [])
              )}
              name="radio-buttons-group"
            >
              <Grid container spacing={5} mt={-3} ml={-2}>
                <Grid item xs={4}>
                  <Box
                    maxWidth={250}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontWeight={600} fontSize={16}>
                      Monthly
                    </Typography>{" "}
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      labelPlacement="start"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    maxWidth={250}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontWeight={600} fontSize={16}>
                      Custom
                    </Typography>
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      labelPlacement="start"
                    />
                  </Box>
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          {!product.supplyFrequency && (
            <>
              <Typography
                color={"#4D4D4D"}
                fontWeight={500}
                fontSize={16}
                mt={3}
                mb={2}
              >
                Select a month range :
              </Typography>
              {renderMonthSelection()}
            </>
          )}
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography color={"#4D4D4D"} fontWeight={500} fontSize={16} mt={3}>
            Other Product Details
          </Typography>
          <Typography fontSize={"13px"} mt={1} mb={1} color={"#4D4D4D"}>
            (Any additional relevant details about the product, such as
            expiration details, packaging sizes, etc)
          </Typography>
          <TextField
            fullWidth
            InputProps={{ sx: { borderRadius: 3 } }}
            multiline
            rows={7}
            value={product.description}
            onChange={(e) => handleChange("description", e.target.value)}
          ></TextField>
        </Grid>
        <Grid
          item
          xs={12}
          mt={3}
          display={"flex"}
          justifyContent={"end"}
          gap={2}
        >
          <Button
            size="large"
            sx={{
              height: 50,
              borderRadius: 1,
              color: "primary.main",
              mt: 2,
              width: 170,
            }}
            variant="outlined"
            onClick={() => Discard()}
          >
            <Typography textTransform="capitalize" fontWeight={600}>
              Discard
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              height: 50,
              borderRadius: 1,
              color: "white",
              mt: 2,
              width: 170,
            }}
            onClick={() => save()}
          >
            <Typography textTransform="capitalize" fontWeight={600}>
              Save Product
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProducts;
