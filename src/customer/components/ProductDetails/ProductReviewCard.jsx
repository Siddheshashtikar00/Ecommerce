import { Avatar, Grid, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 40, height: 40, bgcolor: "#9155fd" }}
            >
              S
            </Avatar>
          </Box>
        </Grid>

        <Grid className="text-left" item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Siddhesh</p>
              <p className="opacity-70">April 5, 2024</p>
            </div>
          </div>

          <Rating
            value={4.6}
            name="half-rating"
            readOnly
            precision={0.1}
          ></Rating>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
