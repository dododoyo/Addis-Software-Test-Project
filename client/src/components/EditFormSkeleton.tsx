import React from "react";
import ContentLoader from "react-content-loader";
import { Box, Container } from "@mui/material";

const EditFormSkeleton: React.FC = () => (
  <Container maxWidth="sm">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <ContentLoader
        speed={2}
        width={600}
        height={800}
        viewBox="0 0 600 800"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="20" rx="4" ry="4" width="500" height="40" />
        <rect x="0" y="70" rx="4" ry="4" width="500" height="40" />
        <rect x="0" y="120" rx="4" ry="4" width="240" height="40" />
        <rect x="260" y="120" rx="4" ry="4" width="240" height="40" />
        <rect x="0" y="170" rx="4" ry="4" width="500" height="40" />
        <rect x="0" y="220" rx="4" ry="4" width="240" height="40" />
        <rect x="260" y="220" rx="4" ry="4" width="240" height="40" />
        <rect x="0" y="270" rx="4" ry="4" width="500" height="40" />
        <rect x="0" y="320" rx="4" ry="4" width="500" height="100" />
        <rect x="0" y="420" rx="4" ry="4" width="500" height="40" />
      </ContentLoader>
    </Box>
  </Container>
);

export default EditFormSkeleton;
